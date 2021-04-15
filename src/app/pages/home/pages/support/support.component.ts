import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';
import { NavigationService } from '../../services/navigation.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'erestaurant-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit, AfterViewInit {

  scrollingSubscription: Subscription;
  lastOffset;
  headerClasses;
  type = 0;
  isMobile = false;

  constructor(private scrollDispatcher: ScrollDispatcher, private cd: ChangeDetectorRef,
              private navService: NavigationService, private scrollService: ScrollService
    , breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  @ViewChild('mainContent') mainContent: any;
  @ViewChild(CdkScrollable) scrollable: CdkScrollable;
  @ViewChild(MatSidenavContent, { static: true }) content: MatSidenavContent;
  @ViewChild('pageHeader', { static: true }) pageHeader: HTMLElement;

  pathLists = [
    { pathName: 'Trang chủ', url: '' },
    { pathName: 'Dịch vụ', url: '' },
    { pathName: 'Giới thiệu', url: '' },
    { pathName: 'Hỗ trợ', url: '' }
  ];

  ngAfterViewInit(): void {


  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }


  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    if (window.pageYOffset > 0) {
      this.type = 1;
    } else {
      this.type = 0;
    }
    // console.log("Scroll Event", window.pageYOffset );
  }

  private onWindowScroll(data: CdkScrollable) {

    const scrollTop = data?.getElementRef().nativeElement.scrollTop || 0;
    console.log(scrollTop);
    if (this.lastOffset > scrollTop) {
      console.log('Show toolbar');
    } else if (scrollTop < 10) {
      console.log('Show toolbar');
    } else if (scrollTop > 100) {
      console.log('Hide toolbar');
    }
    this.lastOffset = scrollTop;
  }

}


