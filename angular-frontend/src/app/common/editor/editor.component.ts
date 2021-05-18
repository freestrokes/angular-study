import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { editorInitType } from 'src/app/common/value/common.value';

import TuiEditor from '@toast-ui/editor';
import TuiViewer from '@toast-ui/editor/dist/toastui-editor-viewer';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: []
})
export class EditorComponent implements OnInit, AfterViewInit {

  @Input() public content: string;
  @Input() public initType: string;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initEditor();
  }

  // Initialize Editor
  public initEditor(): void {
    const editorOptions = {
      el: document.getElementById('tui-editor'),
      height: '500px',
      initialEditType: 'markdown',
      initialValue: this.content
    };

    if (this.initType === editorInitType[editorInitType.EDIT]) {
      const tuiEditor = new TuiEditor(editorOptions);
    } else {
      const tuiViewer = new TuiViewer(editorOptions);
    }
  } // func - initEditor

}
