import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private isScroll$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentValue = false;
  constructor() { }

  public getIsScroll() {
    return this.isScroll$.asObservable();
  }

  public checkIsScroll(status: boolean) {
    if (this.currentValue !== status) {
      this.isScroll$.next(status);
    }
  }
}
