import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { AppGlobalRouterService } from 'src/app/services';
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private wowService: NgwWowService,
    private appGlobalRouterService: AppGlobalRouterService) {
    this.wowService.init();
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    // autoplay: true,
  };

  basketSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  ngOnInit(): void {
    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //   console.log("slider");
    //   e.target;
    //   e.relatedTarget;
    //   $('.carousel').slick('setPosition');
    // });
  }

  redirectToFindPool(){
    this.appGlobalRouterService.navigateToFindPoolPage()
  }
}
