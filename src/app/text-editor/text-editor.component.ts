import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ckeditorConfiguration } from './shared/ckeditor-configuration'


declare const window: any;

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
  editor: any;

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

  constructor() { }

  ngOnInit() {
    if (window.CKEDITOR) {
      this.editor = window.CKEDITOR.replace('editor', ckeditorConfiguration);
      const that = this;
        this.editor.addCommand('saveData', {
          exec: function (edt) {
            that.saveData();
          }
        });
        this.editor.ui.addButton('saveButton', {
          label: 'Save',
          command: 'saveData',
          toolbar: 'editing,1',
          icon: 'https://png.icons8.com/ios/100/000000/save-filled.png'
        });
        this.editor.addCommand('loadData', {
          exec: function (edt) {
            that.loadData();
          }
        });
        this.editor.ui.addButton('loadButton', {
          label: 'Load Content',
          command: 'loadData',
          toolbar: 'editing,1',
          icon: 'https://png.icons8.com/ios/50/000000/synchronize-filled.png'
        });
    }
  }

  /**
   * Getters and setters
   */

  set documentContent(value) {
    this.documentContentValue = value;
    if (this.editor != null) {
      this.editor.setData(this.documentContentValue, function () {
        this.checkDirty();  // true
      });
    }
    this.documentContentChange.emit(this.documentContentValue);
  }

  @Input()
  get documentContent() {
    return this.documentContentValue;
  }


  /**
   * Methods
   */

  public saveData() {
    if (this.editor != null) {
      this.documentContent = this.editor.getData();
    }
    this.saveDataEvent.emit();
  }

  public loadData() {
    this.loadDataEvent.emit();
  }
}
