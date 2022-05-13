import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './intercepors/error.interceptor';
import { LoadingInterceptor } from './intercepors/loading.interceptors';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ]
  ,
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: ErrorInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS , useClass: LoadingInterceptor , multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
