import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditorComponent
  ],
  exports: [
    EditorComponent
  ],
  providers: [
  ]
})
export class SharedModule {
}
