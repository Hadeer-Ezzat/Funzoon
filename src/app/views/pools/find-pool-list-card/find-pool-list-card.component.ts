import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PoolCardPreviewDto } from 'src/app/core/dtos';
import { AppGlobalRouterService } from 'src/app/services';

@Component({
  selector: 'app-find-pool-list-card',
  templateUrl: './find-pool-list-card.component.html',
  styleUrls: ['./find-pool-list-card.component.scss']
})
export class FindPoolListCardComponent implements OnInit {

  @Input() pool: PoolCardPreviewDto

  constructor(private appGlobalRouterService: AppGlobalRouterService) {}

  ngOnInit(): void {
  }

  navigateToFindPoolMoreDetails(poolId){
    this.appGlobalRouterService.navigateToFindPoolMoreDetails(poolId)
  }

}
