import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//impport the compoenents you would like to route to
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'

//routing is inside an array of objects 
const routes: Routes = [
   {path: '', component: HomeComponent  },
   {path: 'about', component: AboutComponent },
   {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
