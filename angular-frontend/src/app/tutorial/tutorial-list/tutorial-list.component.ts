import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: []
})
export class TutorialListComponent implements OnInit {

  public tutorialList: Tutorial[] = [];
  public tutorial: Tutorial = new Tutorial();
  public keyword = '';
  //TODO
  // public currentTutorial?: Tutorial;
  // public currentIndex = -1;

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
  }

  // Search tutorial by keyword
  public searchTutorial(): void {
    //TODO
    // this.currentTutorial = undefined;
    // this.currentIndex = -1;

    this.tutorialService.searchTutorial(this.keyword)
      .subscribe(response => {
        if (response) {
          this.tutorialList = response;
        } else {
          console.log(response);
        }
      });
  }

  //TODO
  // public refreshList(): void {
  //   this.retrieveTutorials();
  //   this.currentTutorial = undefined;
  //   this.currentIndex = -1;
  // }

  //TODO
  // public setActiveTutorial(tutorial: Tutorial, index: number): void {
  //   this.currentTutorial = tutorial;
  //   this.currentIndex = index;
  // }

  //TODO
  // removeAllTutorials(): void {
  //   this.tutorialService.deleteAll()
  //     .subscribe(response => {
  //       if (response) {
  //         this.refreshList();
  //       } else {
  //         console.log(response);
  //       }
  //     });
  // }

}
