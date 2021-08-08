import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/board/board.value';
import { BoardService } from 'src/app/board/board.service';
import { SelectValue, Page } from 'src/app/common/value/common.value';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: []
})
export class BoardListComponent implements OnInit {

  public boardList: Board[] = [];
  public board: Board = new Board();
  public page: Page = new Page();
  public keyword = '';

  public pageSizeList: SelectValue[] = [
    { label: '10', value: 10, checked: true },
    { label: '50', value: 50, checked: false },
    { label: '100', value: 100, checked: false }
  ];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.initPage();
    this.retrieveBoardList();
  }

  // Initialize page
  public initPage(): void {
    this.page.currentPage = 1;
    this.page.itemsPerPage = this.pageSizeList.filter(item => item.checked)[0].value;
  } // func - initPage

  // Retrieve all board items
  public retrieveBoardList(): void {
    this.boardService.getBoardList(this.keyword, this.page)
      .subscribe(response => {
        if (response) {
          this.boardList = response.rows;
          this.page.totalItems = response.count;
        } else {
          console.log(response);
        }
      });
  } // func - retrieveBoardList

  // Search board item by keyword
  public searchBoard(): void {
    this.boardService.searchBoard(this.keyword)
      .subscribe(response => {
        if (response) {
          this.boardList = response;
        } else {
          console.log(response);
        }
      });
  } // func - searchBoard

  // Change page
  public changePage(event: number): void {
    this.page.currentPage = event;
    this.retrieveBoardList();
  } // func - pageChanged

  // Change page size
  public changePageSize(event: any): void {
    this.page.itemsPerPage = event.target.value;
    this.page.currentPage = 1;
    this.retrieveBoardList();
  } // func - changePageSize

}
