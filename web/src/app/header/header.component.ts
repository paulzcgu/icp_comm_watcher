import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  employeeFullName: any;
  appInfo: string;
  sessionExpiration: number;
  sessionExpirationDate: string;
  environmentName: SafeHtml;
  sessionSecondsLeft = 0;
  sessionTimeLeft: string;
  interval: any;

  constructor() {
    
  }

  ngOnInit() {
  }

}
