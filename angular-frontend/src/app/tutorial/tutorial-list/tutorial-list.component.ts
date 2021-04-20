import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  public tutorials?: Tutorial[];
  public currentTutorial?: Tutorial;
  public currentIndex = -1;
  public title = '';

  // Change Detect
  protected changeDetect: ChangeDetectorRef;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  // TODO
  // 아래 내용을 기준으로 변경할 것
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(response => {
        if (response) {
          this.tutorials = response;
          // TODO
          // this.changeDetect.detectChanges();
        } else {
          console.log(response);
        }
        // if(response.code === CommonConstant.RESULTCODE.SUCCESS){
        //   response.data.items.forEach(item => {
        //     this.meshList.push(new SelectValue(item.name, item.meshId, false));
        //   });
        //
        //   this.getDashboardDataplaneList();
        // }
        // this.safelyDetectChanges();
      });

      // TODO
      // 위의 내용 수정시 삭제할 것
      // .subscribe(
      //   data => {
      //     this.tutorials = data;
      //     console.log(data);
      //   },
      //   error => {
      //     console.log(error);
      //   });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
