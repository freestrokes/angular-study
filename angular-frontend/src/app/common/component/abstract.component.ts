import {ChangeDetectorRef, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';

export abstract class AbstractComponent implements OnInit, OnDestroy {

  // Change Detect
  protected changeDetect: ChangeDetectorRef;

  protected constructor(protected elementRef: ElementRef,
                        protected injector: Injector) {
    this.changeDetect = injector.get(ChangeDetectorRef);
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  //TODO
  protected safelyDetectChanges(): void {
    // tslint:disable-next-line:no-string-literal
    if (!this.changeDetect['destroyed']) {
      this.changeDetect.detectChanges();
    }
  } // func - safelyDetectChanges

}
