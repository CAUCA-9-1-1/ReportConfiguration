import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ckeditorConfiguration} from './shared/ckeditor-configuration';
import {PlaceholderGroup} from './shared/placeholder-group';


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
  placeholderList: PlaceholderGroup[];
  documentContentValue: string;
  editor: any;
  isReady: boolean;

  /**
   * Callbacks
   */

  @Output()
  documentContentChange = new EventEmitter<string>();

  @Output()
  loadDataEvent = new EventEmitter<string>();

  @Output()
  saveDataEvent = new EventEmitter<string>();

  @Output()
  placeHolderEvent = new EventEmitter<PlaceholderGroup[]>();


  /**
   * Initialisation
   */

  constructor() { 
    this.isReady = false;
  }

  ngOnInit() {
    document.getElementById('editor').style.display = 'none';
  }

  public initializeCKEditor() {
    if (window.CKEDITOR) {
      window.CKEDITOR.plugins.addExternal('strinsert', '../../assets/custom_plugins/strinsert/');

      const editBar = ckeditorConfiguration.toolbar.find(toolBar => toolBar.name === 'editing');
      editBar.items = [];
      this.placeholderList.forEach(group => editBar.items.push(group.tag));
      console.log('config', ckeditorConfiguration);

      ckeditorConfiguration['placeholders'] = this.placeholderList;
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
      this.showEditor();
    }
  }

  /**
   * Getters and setters
   */

  set documentContent(value: string) {
    this.documentContentValue = value;
    if (!this.editor && this.isReady) {
      this.initializeCKEditor();
    }
    this.isReady = true;
    
    if (this.editor != null) {
      this.editor.setData(this.documentContentValue, function () {
        this.checkDirty();  // true
      });
      this.documentContentChange.emit(this.documentContentValue);
    }
  }

  @Input()
  get documentContent() {
    return this.documentContentValue;
  }

  set placeholders(placeholderNames) {
    if (placeholderNames === undefined || placeholderNames === null) {
      return;
    }
    this.placeholderList = placeholderNames;
    this.placeHolderEvent.emit(this.placeholderList);
    if(this.isReady) {
      this.initializeCKEditor();
    }
    this.isReady = true;
  }

  @Input()
  get placeholders() {
    return this.placeholderList;
  }

  /**
   * Methods
   */

  public showEditor() {
    document.getElementById('editor').style.display = 'block';
  }

  public saveData() {
    if (this.editor != null) {
      this.documentContent = this.editor.getData();
    }
    this.saveDataEvent.emit();
  }

  public loadData() {
    this.loadDataEvent.emit();
  }

  @Input()
  public insertAtCaret(value) {
    this.editor.insertText(value);
  }
}
