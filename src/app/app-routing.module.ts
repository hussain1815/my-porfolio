import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyyComponent } from './body/bodyy/bodyy.component';
import { ContactComponent } from './body/contact/contact.component';
import { Service2Component } from './body/service2/service2.component';
import { ServicesComponent } from './body/services/services.component';

const routes: Routes = [
  {path: '', component: BodyyComponent},
{path: 'service', component: ServicesComponent},
{path: 'home', component: BodyyComponent},
{path: 'service2', component: Service2Component},
{path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
