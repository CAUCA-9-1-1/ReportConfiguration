import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TextEditorComponent
  ],
  declarations: [TextEditorComponent],
  providers: []
})
export class TextEditorModule { }
