import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesNameConstants } from 'src/app/core/constants';
import { FindPoolMoreDetailsDto } from 'src/app/core/dtos';
import { PoolsService } from 'src/app/services';

@Component({
  selector: 'app-find-pool-more-details',
  templateUrl: './find-pool-more-details.component.html',
  styleUrls: ['./find-pool-more-details.component.scss']
})
export class FindPoolMoreDetailsComponent implements OnInit {

  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    draggable:true,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    // asNavFor:".thumbs",
    dots: true,
    infinite: true,
    autoplaySpeed: 2000 
  };
  thumbnailsSlider = {
    infinite: true,
    speed:300,
    // autoplaySpeed: 2000,
    slidesToShow:5,
    slidesToScroll:1,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".feedback",
    prevArrow:'.client-thumbnails .prev-arrow',
    nextArrow:'.client-thumbnails .next-arrow',
  };

  pool: FindPoolMoreDetailsDto = {
    id: 1,
    changingOrRestRoom: false,
    address: '123 Smith Dr, Annapolis, MD',
    specialAccessInstructions: 'specialAccessInstructions',
    nameEn: 'Pool 12',
    descriptionEn: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
     Aldus PageMaker including versions of Lorem Ipsum.`,
    amenities: [
     'Bathroom',
     'Great for Laps',
     'Changing Room',
     'Night Lighting',
     'Heated Pool'
    ],
    additionalAmenities: `Hosts have no responsibilities regarding pool safety. Every guest or parents are responsible for their own and family safety while using the pool, regardless of their age. Please throw your trash in the trash pin provided at the pool area.`,
    length: 7,
    width: 3.5,
    shalloestPoint: 2,
    deepestPoint: 3.5,
    chargePrice: 40,
    isAnAdditionalFee: true,
    areChildrenAllowed: false,
    areInfantsAllowed: true,
    maxCapcity: 20,
    privacyDescription: 'The pool area is visible from home but not to neighbors and shades will be closed.',
    rules: [
      'No Parties',
      'No Loud Music',
      'No Smoking',
      'No Pets'
    ],
    additonalRules: `Hosts have no responsibilities regarding pool safety. Every guest
    or parents are responsible for their own and family safety while using
    the pool, regardless of their age. Please throw your trash in the
    trash pin provided at the pool area.`,
    cancellationPolicyId: 3,
    poolImgs: [
      "assets/images/item5.jpg",
      "assets/images/item2.jpg",
      "assets/images/item6.jpg",
      "assets/images/item2.jpg",
      "assets/images/item6.jpg",
      "assets/images/item5.jpg",
      "assets/images/item2.jpg",
      "assets/images/item6.jpg",
      "assets/images/item2.jpg",
      "assets/images/item6.jpg"
      ],
    poolAgent: {
      fullName: 'Mohamed Mohsen',
      profileImg: "assets/images/agent.jpg",
      bio: 'Bio Bio Bio Bio Bio Bio Bio Bio Bio',
    },
    poolReviews: [ 
      {
        reviewerFullName: 'Jhon Smith',
        reviewerProfileImg: "assets/images/agent.jpg",
        datePosted: 'January 2021',
        rate: 3.5,
        comment: `Hazem has a really wonderful host. His response time is a 10/10. Replied to my inqueries quickly on and off the property. The place is really spacious and clean. My friends and I had a wonderful time and will definitely be booking again.`
      },
      {
        reviewerFullName: 'Mr Bob',
        reviewerProfileImg: "assets/images/agent.jpg",
        datePosted: 'March 2020',
        rate: 5,
        comment: `Hazem has a really wonderful host. His response time is a 10/10. Replied to my inqueries quickly on and off the property. The place is really spacious and clean. My friends and I had a wonderful time and will definitely be booking again.`
      }
    ]
  }

  isLoading: boolean = true
  // poolId: number
  pool2: FindPoolMoreDetailsDto

  constructor(private poolsService: PoolsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {      
    const poolId = +this.route.snapshot.paramMap.get(PagesNameConstants.idParameter)
    this.poolsService.getPoolDetailsInFindPools(poolId).subscribe(response => {
      if(response.isSucceeded){
        this.pool = response.result
      }else{
        //Show an error
      }
      this.isLoading = false
    })
  }

}
