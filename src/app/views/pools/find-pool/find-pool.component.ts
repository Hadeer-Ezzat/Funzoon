import { Component, OnInit } from '@angular/core';
import { PaginationConstants } from 'src/app/core/constants';
import { PageData, PoolCardPreviewDto } from 'src/app/core/dtos';
import { PoolsService } from 'src/app/services';

@Component({
  selector: 'app-find-pool',
  templateUrl: './find-pool.component.html',
  styleUrls: ['./find-pool.component.scss']
})
export class FindPoolComponent implements OnInit {

  // pageSize: number = PaginationConstants.defaultPageSize
  pageData: PageData<PoolCardPreviewDto>
  isLoading: boolean = true

  constructor(private poolsService: PoolsService) { }

  pools: PoolCardPreviewDto[] = []
  pools2 = [
    {
      id: 1,
      nameEn: '6 Star Pool 1', 
      address: 'Guildford, New South Wales, 2161', 
      distance: '19.95 kilometres', 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 41, 
      imagePath: 'assets/images/blue-water.jpg'
    },
    {
      id: 2,
      nameEn: '6 Star Pool 2', 
      address: 'Guildford, New South Wales, 2161', 
      distance: '19.95 kilometres', 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 32, 
      imagePath: 'assets/images/item2.jpg'
    },
    {
      id: 3,
      nameEn: '6 Star Pool 3', 
      address: 'Guildford, New South Wales, 2161', 
      distance: '19.95 kilometres', 
      descriptionEn: `A high quality swimming pool for you and your friends to enjoy a hot summer day in Sydney.Will not be disappointed! Specially if you're coming to have a great time and get your tan on :)`,
      chargePrice: 47, 
      imagePath: 'assets/images/item3.jpg'
    },
  ]
  
  hasPools(): boolean{
    return this.pageData? this.pageData.totalRecords > 0 : false
  }
  
  ngOnInit(): void {
    this.loadPagePools(1)
  }

  loadPagePools(pageNumber: number) {
    this.isLoading = true
    this.poolsService.getPoolsAtPage(pageNumber).subscribe(response => {
      if(response.isSucceeded){
        this.pageData = response.result
      }
      this.isLoading = false
    })
  }

}
