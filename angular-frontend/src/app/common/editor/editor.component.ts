import { Component, OnInit, AfterViewInit } from '@angular/core';

// Toast UI Editor Import
import TuiEditor from '@toast-ui/editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: []
})
export class EditorComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initEditor();
  }

  // Initialize Editor
  public initEditor(): void {
    const tuiEditorOptions = {
      el: document.getElementById('tui-editor'),
      height: '500px',
      initialEditType: 'markdown',
    };

    const tuiEditor = new TuiEditor(tuiEditorOptions);
  } // func - initEditor

}
