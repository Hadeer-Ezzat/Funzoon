import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/shared/layouts/root-layout/app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestHttpInterceptor, ResponseHttpInterceptor } from './interceptors';
import { RouterModule } from '@angular/router';
import { SharedModule } from './views/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/app/details/details.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
