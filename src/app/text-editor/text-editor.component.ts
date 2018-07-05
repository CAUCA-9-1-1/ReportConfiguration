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
  editorConfiguration = ckeditorConfiguration;

  @Input()
  get documentContent() {
    return this.documentContentValue;
  }

  /**
   * Callbacks
   */

  @Output()
  documentContentChange = new EventEmitter<string>();

  @Output()
  loadDataEvent = new EventEmitter<string>();

  @Output()
  saveDataEvent = new EventEmitter<string>();
  

  /**
   * Initialisation
   */

  constructor(
    private textEditorService: TextEditorService
  ) { }

  ngOnInit() {  }

  /**
   * Getters and setters
   */

  set documentContent(value) {
    this.documentContentValue = value;
    this.documentContentChange.emit(this.documentContentValue);
  }


  /**
   * Methods
   */

  public saveData() {
    this.saveDataEvent.emit();
  }

  public loadData() {
    this.loadDataEvent.emit();
  }
}
