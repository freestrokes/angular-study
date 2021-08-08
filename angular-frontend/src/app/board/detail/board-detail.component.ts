import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/board/board.value';
import { BoardService } from 'src/app/board/board.service';
import { EditorComponent } from 'src/app/common/editor/editor.component';
import { editorInitType } from 'src/app/common/value/common.value';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: []
})
export class BoardDetailComponent implements OnInit {

  @ViewChild('viewer', {static: false})
  public viewer: EditorComponent;


  public board: Board = new Board();
  public content: string = '';
  public editorInitType: string = editorInitType[editorInitType.VIEW];

  constructor(private boardService: BoardService,
              private route: ActivatedRoute,
              private router: Router,
              private changeDetect: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getBoard(this.route.snapshot.params.id);
  }

  // Set Editor Init Type
  public setEditorInitType(): void {
    this.editorInitType = this.editorInitType === editorInitType[editorInitType.VIEW] ? editorInitType[editorInitType.EDIT] : editorInitType[editorInitType.VIEW];
    this.changeDetect.detectChanges();
    this.viewer.initEditor();
  } // func - setEditorInitType

  // Retrieve board item by id
  public getBoard(id: string): void {
    this.boardService.getBoard(id)
      .subscribe(response => {
        if (response) {
          this.board = response;
          this.content = this.board.description;
        } else {
          console.log(response);
        }
      });
  }

  // Update board item by id
  public updateBoard(): void {
    if (!this.board.id || !this.viewer) {
      return;
    }

    this.board.description = this.viewer.getContent();

    this.boardService.updateBoard(this.board.id, this.board)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/board/list']);
        } else {
          console.log(response);
        }
      });
  }

  // Delete board item by id
  public deleteBoard(): void {
    if (!this.board.id) {
      return;
    }

    this.boardService.deleteBoard(this.board.id)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/board/list']);
        } else {
          console.log(response);
        }
      });
  }

  // Update board item status
  public updatePublished(status: boolean): void {
    if (!this.board.id) {
      return;
    }

    this.boardService.updateBoard(this.board.id, this.board)
      .subscribe(response => {
        if (response) {
          this.board.published = status;
        } else {
          console.log(response);
        }
      });
  }

}
