import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public isMobile = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
