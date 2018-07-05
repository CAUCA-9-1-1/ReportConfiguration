import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ckeditorConfiguration } from './shared/ckeditor-configuration'
import { TextEditorService } from './shared/text-editor.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  /**
   * Attributes
   */
  documentContentValue: string;

  @Output()
  documentContentChange = new EventEmitter<string>();

  @Input()
  get documentContent() {
    return this.documentContentValue;
  }

  set documentContent(value) {
    this.documentContentValue = value;
    this.documentContentChange.emit(this.documentContentValue);
  }

  @Output()
  resetDataEvent = new EventEmitter<string>();



  _editorConfiguration = ckeditorConfiguration;
  _isLoading = false;

  /**
   * Initialisation
   */
  constructor(
    private textEditorService: TextEditorService
  ) { }

  ngOnInit() {
    // this.loadLastSavedTemplate();
  }

  /**
   * Getters and setters
   */

  public set serverUrl(serverUrl: string) {
    this.textEditorService.serverUrl = serverUrl;
  }

  /**
   * Methods
   */
  // public loadLastSavedTemplate() {
  //   this._isLoading = true;
  //   this.textEditorService.getLastSavedTemplate()
  //     .subscribe(res => {
  //         this.documentContent = res;
  //         this._isLoading = false;
  //       },
  //       err => {
  //         this._isLoading = false;
  //       });
  // }

  public saveData() {
    this._isLoading = true;
    this.textEditorService.saveTemplate(this.documentContent).subscribe( res => {
        this._isLoading = false;
      },
      err => {
        this._isLoading = false;
      });
  }

  public resetData() {
    this.resetDataEvent.emit();
  }
}
