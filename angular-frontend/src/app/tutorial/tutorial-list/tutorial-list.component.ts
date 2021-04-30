import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';
import { Page } from 'src/app/common/value/common.value';

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
  // public pageSizeList: object[] = [
  //   { label: '10', value: 10, checked: true },
  //   { label: '50', value: 50, checked: false },
  //   { label: '100', value: 100, checked: false }
  // ];

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorialList();
  }

  // Retrieve all tutorials
  public retrieveTutorialList(): void {
    this.tutorialService.getTutorialList()
      .subscribe(response => {
        if (response) {
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

  // Page changed
  public pageChanged(event: number): void {
    this.page.currentPage = event;
    this.retrieveTutorialList();
  } // func - pageChanged

}
