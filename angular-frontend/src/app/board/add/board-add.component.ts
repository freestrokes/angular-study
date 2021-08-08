import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/board/board.value';
import { BoardService } from 'src/app/board/board.service';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: []
})
export class BoardAddComponent implements OnInit {

  @ViewChild('editor', {static: false})
  public editor: EditorComponent;

  public board: Board = new Board();

  constructor(private boardService: BoardService,
              private router: Router) {}

  ngOnInit(): void {
  }

  // Create board
  public createBoard(): void {
    if (!this.editor) {
      return;
    }

    this.board.description = this.editor.getContent();

    this.boardService.createBoard(this.board)
      .subscribe(response => {
        if (response) {
          //TODO
          // this.submitted = true;
          this.router.navigate(['/board/list']);
        } else {
          console.log(response);
        }
      });
  }

}
