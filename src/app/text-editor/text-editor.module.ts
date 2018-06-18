import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { LoadingModule } from 'ngx-loading';
import { TextEditorService } from './shared/text-editor.service';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    LoadingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TextEditorComponent
  ],
  declarations: [TextEditorComponent],
  providers: [TextEditorService]
})
export class TextEditorModule { }
