import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';


@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: []
})
export class TutorialAddComponent implements OnInit {

  public tutorial: Tutorial = new Tutorial();
  //TODO
  // public submitted: boolean = false;

  constructor(private tutorialService: TutorialService,
              private router: Router) {}

  ngOnInit(): void {
  }

  public createTutorial(): void {
    this.tutorialService.createTutorial(this.tutorial)
      .subscribe(response => {
        if (response) {
          //TODO
          // this.submitted = true;
          this.router.navigate(['/tutorial/list']);
        } else {
          console.log(response);
        }
      });
  }

  //TODO
  // newTutorial(): void {
  //   this.submitted = false;
  //   this.tutorial = {
  //     title: '',
  //     description: '',
  //     published: false
  //   };
  // }

}
