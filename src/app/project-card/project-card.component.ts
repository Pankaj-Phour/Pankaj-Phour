import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

 @Input() project:any;

 constructor(private router:Router){}

 navigate(project:any){
  localStorage.setItem('project',JSON.stringify(project))
  // this.router.navigate(['/project-details'])
 }

}
