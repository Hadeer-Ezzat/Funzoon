import { Component, OnInit } from '@angular/core';
import { AppGlobalRouterService } from 'src/app/services';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor(private appGlobalRouterService: AppGlobalRouterService) { }

  ngOnInit(): void {
  }

  redirectToHome(){
    this.appGlobalRouterService.navigateToHomePage()
  }
}
