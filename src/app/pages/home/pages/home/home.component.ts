import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenavContent} from '@angular/material/sidenav';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';
import AOS from 'aos';
import {Subscription, timer} from 'rxjs';
import {NavigationService} from '../../services/navigation.service';
import {ScrollService} from '../../services/scroll.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LandingPageService} from '../../services/landing-page.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Subject} from '../../../../core/models/subject';
import {environment} from '../../../../../environments/environment';
import {Video} from '../../../../core/models/video';


@Component({
  selector: 'erestaurant-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class HomeComponent implements OnInit, AfterViewInit {

  scrollingSubscription: Subscription;
  lastOffset;
  headerClasses;
  type = 0;
  isMobile = false;

  url = environment;


  public width: number = window.innerWidth;
  public height: number = window.innerHeight;

  public widthVideo: number = 300;
  public heightVideo: number = 300;

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
    {pathName: 'Blogs', url: '', type: 3},
    {pathName: 'Contact', url: 'contact', type: 3}
  ];

  public skillLists = [
    {name: 'Java', value: 80},
    {name: '.Net Core', value: 70},
    {name: 'Angular', value: 60},
    {name: 'Linux', value: 50},
    {name: 'Devops', value: 50},
    {name: 'etc...', value: 50},
  ];



  public subjects: Subject[] = [];
  public managerSubject = [];
  public staffSubject = [];
  public videos: Video[] = [];
  public qas: [];
  public selectedQAs: any[];
  public isOpen: boolean;
  public more: string;


  public tutorialVideos = [];

  public version = environment.version;
  public domain = environment.domain;

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
    private landingpageServices: LandingPageService,
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
    this.getAllSubject();
    this.isOpen = false;
    this.resizeVideo();
  }

  public toggleSideNav(): void {
    this.navService.setShowNav(true);
  }

  private onWindowScroll(data: CdkScrollable): void {
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


  // Api
  public getAllSubject() {
    this.landingpageServices.getAllSubject().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
      this.subjects.sort(function(a: any, b: any) {
        var keyA = new Date(a.Index),
          keyB = new Date(b.Index);
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });

      const fillterManagers = this.subjects.filter(i => 0 === i.SubjectType);
      const fillterStaffs = this.subjects.filter(i => 1 === i.SubjectType);


      const newManagers = [];
      while (fillterManagers.length) {
        newManagers.push(fillterManagers.splice(0, 4));
      }

      const newStaffs = [];
      while (fillterStaffs.length) {
        newStaffs.push(fillterStaffs.splice(0, 4));
      }

      this.managerSubject = newManagers;
      this.staffSubject = newStaffs;
      console.log(this.managerSubject);
      console.log(this.staffSubject);

      console.log(this.staffSubject[0]);

    }, error => {
      this.subjects = [];
    });
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
    this.resizeVideo();
  }

  public resizeVideo(): void {
    if (320 <= this.width && this.width < 600) {
      this.widthVideo = 0.8 * this.width;
      this.heightVideo = 0.3 * this.height;
    }

    if (600 <= this.width && this.width < 960) {
      this.widthVideo = 0.8 * this.width;
      this.heightVideo = 0.3 * this.height;
    }


    if (960 <= this.width && this.width < 1280) {
      this.widthVideo = 0.4 * this.width;
      this.heightVideo = 0.3 * this.height;
    }

    if (1280 <= this.width && this.width < 1920) {
      this.widthVideo = 0.3 * this.width;
      this.heightVideo = 0.3 * this.height;
    }
  }

  public directinalPage = (type: number) => {
    switch (type) {
      case 0:
        this.mainContent.nativeElement.scrollIntoView();
        break;

      case 1:
        this.serviceContent.nativeElement.scrollIntoView();
        break;
      case 2:
        this.introduceContent.nativeElement.scrollIntoView();
        break;
      case 3:
        this.supportContent.nativeElement.scrollIntoView();
        break;

      default:
        break;
    }
  };

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

  formatLabel(value: number | null): any {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}


