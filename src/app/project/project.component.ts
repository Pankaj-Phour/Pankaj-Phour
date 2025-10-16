import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project:any;
  
  constructor(private router:Router){
    if(localStorage.getItem('project')){
      this.project = JSON.parse(localStorage.getItem('project'));
    }
    else{
      this.router.navigate(['/']);
    }
  };

  navigate(){
    this.router.navigate(['/'])
  }
}
