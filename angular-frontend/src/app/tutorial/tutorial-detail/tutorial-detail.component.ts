import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorial/tutorial.value';
import { TutorialService } from 'src/app/tutorial/tutorial.service';
import { EditorComponent } from 'src/app/common/editor/editor.component';
import { editorInitType } from 'src/app/common/value/common.value';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: []
})
export class TutorialDetailComponent implements OnInit {

  @ViewChild('viewer', {static: false})
  public viewer: EditorComponent;


  public tutorial: Tutorial = new Tutorial();
  public content: string = '';
  public editorInitType: string = editorInitType[editorInitType.VIEW];
  //TODO
  // public resultMessage = '';

  protected changeDetect: ChangeDetectorRef;

  constructor(private tutorialService: TutorialService,
              private route: ActivatedRoute,
              private router: Router,
              protected injector: Injector) {
    this.changeDetect = injector.get(ChangeDetectorRef);
  }

  ngOnInit(): void {
    //TODO
    // this.resultMessage = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  // Set Editor Init Type
  public setEditorInitType(): void {
    this.editorInitType = (this.editorInitType === editorInitType[editorInitType.VIEW]) ? editorInitType[editorInitType.EDIT] : editorInitType[editorInitType.VIEW];
    this.changeDetect.detectChanges();
    this.viewer.initEditor();
  } // func - setEditorInitType

  // Retrieve tutorial by id
  public getTutorial(id: string): void {
    this.tutorialService.getTutorial(id)
      .subscribe(response => {
        if (response) {
          this.tutorial = response;
          this.content = this.tutorial.description;
        } else {
          console.log(response);
        }
      });
  }

  // Update tutorial by id
  public updateTutorial(): void {
    if (!this.tutorial.id || !this.viewer) {
      return;
    }

    this.tutorial.description = this.viewer.getContent();

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
