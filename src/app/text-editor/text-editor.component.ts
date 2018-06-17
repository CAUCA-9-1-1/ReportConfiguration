import { Component, OnInit } from '@angular/core';
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
  _documentContent: any;

  _editorConfiguration = ckeditorConfiguration;
  _isLoading = false;

  /**
   * Initialisation
   */
  constructor(
    private textEditorService: TextEditorService
  ) { }

  ngOnInit() {
    this.loadLastSavedTemplate();
  }

  /**
   * Getters and setters
   */
  public get documentContent(): string {
    return this._documentContent;
  }

  public set documentContent(content: string) {
    this._documentContent = content;
  }

  public set serverUrl(serverUrl: string) {
    this.textEditorService.serverUrl = serverUrl;
  }

  /**
   * Methods
   */
  public loadLastSavedTemplate() {
    this._isLoading = true;
    this.textEditorService.getLastSavedTemplate()
      .subscribe(res => {
          this._documentContent = res;
          this._isLoading = false;
        },
        err => {
          this._isLoading = false;
        });
  }

  public saveData() {
    this._isLoading = true;
    this.textEditorService.saveTemplate(this._documentContent).subscribe( res => {
        this._isLoading = false;
      },
      err => {
        this._isLoading = false;
      });
  }

  public resetData() {
    this._isLoading = true;
    this.textEditorService.resetData()
      .subscribe(res => {
          this._documentContent = res;
          this._isLoading = false;
        },
        err => {
          this._isLoading = false;
        }
      );
  }

  public downloadPdf() {
    this.textEditorService.downloadPdf();
  }

}
