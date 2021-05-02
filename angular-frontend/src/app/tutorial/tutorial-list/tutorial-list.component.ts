import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';
import { SelectValue, Page } from 'src/app/common/value/common.value';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: []
})
export class TutorialListComponent implements OnInit {

  public tutorialList: Tutorial[] = [];
  public tutorial: Tutorial = new Tutorial();
  public page: Page = new Page();
  public keyword = '';

  //TODO
  public pageSizeList: SelectValue[] = [
    { label: '3', value: 3, checked: true },
    { label: '10', value: 10, checked: false },
    { label: '50', value: 50, checked: false },
    { label: '100', value: 100, checked: false }
  ];

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.initPage();
    this.retrieveTutorialList();
  }

  // Initialize page
  public initPage(): void {
    this.page.currentPage = 1;
    this.page.itemsPerPage = this.pageSizeList.filter(item => item.checked)[0].value;
  }

  // Retrieve all tutorials
  public retrieveTutorialList(): void {
    this.tutorialService.getTutorialList(this.keyword)
      .subscribe(response => {
        if (response) {
          this.tutorialList = response;
          this.page.totalItems = this.tutorialList.length;
          this.tutorialList = response;
        } else {
          console.log(response);
        }
      });
  } // func - retrieveTutorialList

  // Search tutorial by keyword
  public searchTutorial(): void {
    this.tutorialService.searchTutorial(this.keyword)
      .subscribe(response => {
        if (response) {
          this.tutorialList = response;
        } else {
          console.log(response);
        }
      });
  } // func - searchTutorial

  // Change page
  public changePage(event: number): void {
    this.page.currentPage = event;
    this.retrieveTutorialList();
  } // func - pageChanged

  // Change page size
  public changePageSize(event: any): void {
    this.page.itemsPerPage = event.target.value;
    this.page.currentPage = 1;
    this.retrieveTutorialList();
  } // func - changePageSize

}
