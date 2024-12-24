import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PoolCardPreviewDto } from 'src/app/core/dtos';
import { AppGlobalRouterService } from 'src/app/services';
import { URL } from 'url';

@Component({
  selector: 'app-pool-list-card',
  templateUrl: './pool-list-card.component.html',
  styleUrls: ['./pool-list-card.component.scss']
})
export class PoolListCardComponent implements OnInit {

  @Input() pool: PoolCardPreviewDto
  
  constructor(private appGlobalRouterService: AppGlobalRouterService) {}
  
  ngOnInit(): void {

  }

  navigateToMyPoolsMoreDetails(poolId){
    this.appGlobalRouterService.navigateToMyPoolsMoreDetails(poolId)
  }

}
