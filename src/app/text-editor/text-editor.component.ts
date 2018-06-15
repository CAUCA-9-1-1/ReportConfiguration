import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ckeditorConfiguration } from './assets/ckeditor-configuration'

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  documentContent: any;

  editorConfiguration = ckeditorConfiguration;
  isLoading = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }
}
