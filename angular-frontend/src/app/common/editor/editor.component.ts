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

  //TODO
  // @Input('initType')
  // public set setInitType(initType: string){
  //
  // }

  public editor;

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
      initialEditType: 'wysiwyg',
      initialValue: this.content
    };

    if (this.initType === editorInitType[editorInitType.EDIT]) {
      this.editor = new TuiEditor(editorOptions);
    } else {
      this.editor = new TuiViewer(editorOptions);
    }
  } // func - initEditor

  // Get Editor Content
  public getContent(): string {
    //TODO
    // viewer의 경우에는 this.editor.markdownValue 사용해야 함
    // if (this.editor.isViewer) {
    //   console.log('markdownValue', this.editor.markdownValue);
    // } else {
    //   console.log('getHtml', this.editor.getHtml());
    // }

    return this.editor.getHtml();
  }

}
