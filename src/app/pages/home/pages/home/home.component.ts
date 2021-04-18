import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenavContent} from '@angular/material/sidenav';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';
import AOS from 'aos';
import {timer} from 'rxjs';
import {NavigationService} from '../../services/navigation.service';
import {ScrollService} from '../../services/scroll.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'erestaurant-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class HomeComponent implements OnInit, AfterViewInit {

  lastOffset;
  type = 0;
  isMobile = false;


  public width: number = window.innerWidth;
  public height: number = window.innerHeight;

  @ViewChild('mainContent') mainContent: any;
  @ViewChild(CdkScrollable) scrollable: CdkScrollable;
  @ViewChild(MatSidenavContent, {static: true}) content: MatSidenavContent;
  @ViewChild('pageHeader', {static: true}) pageHeader: HTMLElement;


  @ViewChild('service_content')
  serviceContent: ElementRef;

  @ViewChild('introduce_content')
  introduceContent: ElementRef;

  @ViewChild('support_content')
  supportContent: ElementRef;

  public isShowNav = false;
  public pathLists = [
    {pathName: 'Home', url: '', type: 0},
    {pathName: 'About Me', url: 'about-me', type: 1},
    {pathName: 'Works', url: 'works', type: 2},
    {pathName: 'Blogs', url: 'blog', type: 3, href: 'https://vcoderlog.com/'},
    {pathName: 'Contact', url: 'contact', type: 3}
  ];

  public isOpen: boolean;

  typewriterText1 = 'I\'m Truong';
  typewriterText2 = 'I\'m A Web Developer';
  typewriterText = this.typewriterText1;
  swap = false;
  typewriterDisplay = '';

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.pageYOffset > 0) {
      this.type = 1;
    } else {
      this.type = 0;
    }
  }

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private cd: ChangeDetectorRef,
    private navService: NavigationService,
    private scrollService: ScrollService,
    public sanitizer: DomSanitizer,
    public router: Router,
    breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.isShowNav = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    AOS.init();
    this.initialize();
    this.typingCallback(this);
  }

  private initialize(): void {
    this.isOpen = false;
  }

  public toggleSideNav(): void {
    this.navService.setShowNav(true);
  }

  public onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    if (this.height < 850) {
      this.isMobile = true;
    } else {
      if (!this.isMobile) {
        this.isMobile = false;
      }
    }
  }

  typingCallback(that): void {
    const totalLength = that.typewriterText.length;
    const currentLength = that.typewriterDisplay.length;
    if (currentLength < totalLength) {
      that.typewriterDisplay += that.typewriterText[currentLength];
      setTimeout(that.typingCallback, 50, that);
    } else {
      timer(4000).subscribe(x => {
        if (!this.swap) {
          that.typewriterText = that.typewriterText2;
        } else {
          that.typewriterText = that.typewriterText1;
        }

        this.swap = !this.swap;
        that.typingBackspaceCallback(that);
      });
    }
  }

  typingBackspaceCallback(that): void {
    const totalLength = that.typewriterText.length;
    const currentLength = that.typewriterDisplay.length;
    const wave = 2;
    if (currentLength >= wave) {
      that.typewriterDisplay = that.typewriterDisplay.substring(0, currentLength - wave);
      setTimeout(that.typingBackspaceCallback, 35, that);
    } else {
      that.typingCallback(that);
    }
  }
}


