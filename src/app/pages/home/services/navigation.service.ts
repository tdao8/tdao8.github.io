import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {

  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  public getShowNav() {
    return this.showNav$.asObservable();
  }

  public setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  public toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  public isNavOpen() {
    return this.showNav$.value;
  }
}
