import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './header/hero/hero.component';
import { ServicesComponent } from './body/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './body/contact/contact.component';
import { Service2Component } from './body/service2/service2.component';
import { NavComponent } from './header/nav/nav.component';
import { BodyyComponent } from './body/bodyy/bodyy.component';
import { SplashComponent } from './body/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    Service2Component,
    NavComponent,
    BodyyComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
