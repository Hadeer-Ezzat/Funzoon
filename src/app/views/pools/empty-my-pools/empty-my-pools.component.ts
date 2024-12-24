import { Component, OnInit } from '@angular/core';
import { AppGlobalRouterService } from 'src/app/services';

@Component({
  selector: 'app-empty-my-pools',
  templateUrl: './empty-my-pools.component.html',
  styleUrls: ['./empty-my-pools.component.scss']
})
export class EmptyMyPoolsComponent implements OnInit {

  constructor(private appGlobalRouterService: AppGlobalRouterService) { }

  ngOnInit(): void {
  }

  redirectToAddPool(){
    this.appGlobalRouterService.navigateToAddPoolPage()
  }
}
