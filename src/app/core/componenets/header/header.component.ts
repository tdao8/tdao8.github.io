import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../../../pages/home/services/navigation.service';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { CdkScrollable } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { ScrollService } from '../../../pages/home/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() type: number;
  constructor(private navService: NavigationService) { }

  @ViewChild('pageheader') pageheader: any;

  headerClasses = '';

  pathLists = [
    { pathName: 'Trang chủ', url: '' },
    { pathName: 'Dịch vụ', url: '' },
    { pathName: 'Giới thiệu', url: '' },
    { pathName: 'Hỗ trợ', url: '' }
  ];

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }
}
