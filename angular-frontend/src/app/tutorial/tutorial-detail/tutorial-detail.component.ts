import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: []
})
export class TutorialDetailComponent implements OnInit {

  // TODO
  // tutorial.value import하여 변경할 것
  // currentTutorial: Tutorial = {
  //   title: '',
  //   description: '',
  //   published: false
  // };

  public tutorial: Tutorial = new Tutorial();
  //TODO
  // public resultMessage = '';

  constructor(private tutorialService: TutorialService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    //TODO
    // this.resultMessage = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  // Retrieve tutorial by id
  public getTutorial(id: string): void {
    this.tutorialService.getTutorial(id)
      .subscribe(response => {
        if (response) {
          this.tutorial = response;
        } else {
          console.log(response);
        }
      });
  }

  // Update tutorial by id
  public updateTutorial(): void {
    if (!this.tutorial.id) {
      return;
    }

    //TODO
    // this.resultMessage = '';

    this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/tutorial/list']);
          //TODO
          // this.resultMessage = response.message ? response.message : 'Tutorial updated.';
        } else {
          console.log(response);
        }
      });
  }

  // Delete tutorial by id
  public deleteTutorial(): void {
    if (!this.tutorial.id) {
      return;
    }

    this.tutorialService.deleteTutorial(this.tutorial.id)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/tutorial/list']);
        } else {
          console.log(response);
        }
      });
  }

  // Update tutorial status
  public updatePublished(status: boolean): void {
    if (!this.tutorial.id) {
      return;
    }

    //TODO
    // this.resultMessage = '';

    this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial)
      .subscribe(response => {
        if (response) {
          this.tutorial.published = status;
          //TODO
          // this.resultMessage = response.message ? response.message : 'Tutorial status updated.';
        } else {
          console.log(response);
        }
      });
  }

}
