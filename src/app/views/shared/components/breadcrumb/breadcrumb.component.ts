import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

// https://dev.to/zhiyueyi/create-a-simple-breadcrumb-in-angular-ag5

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  pageName: string = ''
  hasBreadCrumbNodes: boolean = false
  breadcrumbs: IBreadCrumb[]
  private root: IBreadCrumb = {
    label: 'Home',
    url: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.bindBreadCrumbs()
  }

  ngOnInit() {
    this.router.events.pipe(
      filter<NavigationEnd>(e => e instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.bindBreadCrumbs()
    })
  }

  bindBreadCrumbs(){
    this.breadcrumbs = [this.root, ...this.buildBreadCrumb(this.activatedRoute.root)]
    if(this.breadcrumbs.length > 1){
      this.hasBreadCrumbNodes = true
      this.pageName = this.breadcrumbs.pop().label
    }
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const nextUrl = path ? `${url}/${path}` : url;
  
    const breadcrumb: IBreadCrumb = {
        label: label,
        url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}


export interface IBreadCrumb {
  label: string;
  url: string;
}
