import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: []
})
export class TutorialAddComponent implements OnInit {

  @ViewChild('editor', {static: false})
  public editor: EditorComponent;

  public tutorial: Tutorial = new Tutorial();
  //TODO
  // public submitted: boolean = false;

  constructor(private tutorialService: TutorialService,
              private router: Router) {}

  ngOnInit(): void {
  }

  // Create tutorial
  public createTutorial(): void {
    if (!this.editor) {
      return;
    }

    this.tutorial.description = this.editor.getContent();

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
