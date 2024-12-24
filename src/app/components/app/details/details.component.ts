import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor() {}

  poolsView1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    autoPlay: false,
    infinite: false,
    asNavFor: '.slider-nav',
  };
  poolsView2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    focusOnSelect: true,
    autoPlay: false,
    asNavFor: '.slider-for',
  };

  ngOnInit(): void {}
}
