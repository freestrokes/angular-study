import {Injectable} from '@angular/core';

@Injectable()
export class GroundUnit {
  private skills: string[];
  private speed: number;

  constructor(skills: string[], speed: number) {
    this.skills = skills;
    this.speed = speed;
  }

  public move(direction: string): void {
    console.log(`Move to ${direction}`);
  }
}

