import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  // {path:'nav', component: NavbarComponent},
  // {path:'home', component: HomeComponent},
  // {path:'footer', component: FooterComponent},
  // {path:'contact', component: ContactComponent},
  // {path:'about', component: AboutComponent},
  // {path:'projects', component: ProjectsComponent},
  {path:'project-details', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
