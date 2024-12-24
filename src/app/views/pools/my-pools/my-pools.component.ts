import { Component, OnInit } from '@angular/core';
import { PageData, PoolCardPreviewDto } from 'src/app/core/dtos';
import { AppGlobalRouterService, PoolsService } from 'src/app/services';

@Component({
  selector: 'app-my-pools',
  templateUrl: './my-pools.component.html',
  styleUrls: ['./my-pools.component.scss']
})
export class MyPoolsComponent implements OnInit {

  pageData: PageData<PoolCardPreviewDto>
  isLoading: boolean = true

  constructor(private appGlobalRouterService: AppGlobalRouterService, private poolsService: PoolsService) { }

  pools = []
  pools1: PoolCardPreviewDto[] = [
    {
      id: 1,
      nameEn: '6 Star Pool 1', 
      address: 'Guildford, New South Wales, 2161', 
      distance: 19, 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 41, 
      coverImg: 'assets/images/blue-water.jpg'
    },
    {
      id: 2,
      nameEn: '6 Star Pool 2', 
      address: 'Guildford, New South Wales, 2161', 
      distance: 17, 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 32, 
      coverImg: 'assets/images/item2.jpg'
    },
    {
      id: 3,
      nameEn: '6 Star Pool 3', 
      address: 'Guildford, New South Wales, 2161', 
      distance: 17, 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 47, 
      coverImg: 'assets/images/item3.jpg'
    },
  ]
  
  hasPools(): boolean{
    return this.pageData? this.pageData.totalRecords > 0 : false
  }

  ngOnInit(): void {
    this.loadPageMyPools(1)
  }

  loadPageMyPools(pageNumber: number) {
    this.isLoading = true
    this.poolsService.getPoolsAtPage(pageNumber).subscribe(response => {
      if(response.isSucceeded){
        this.pageData = response.result
      }
      this.isLoading = false
    })
  }

}
