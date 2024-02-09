import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills:any=[
    {name:'HTML5',value:90},
    {name:'CSS3',value:90},
    {name:'JavaScript',value:90},
    {name:'NodeJs',value:70},
    {name:'React',value:70},
    {name:'Angular',value:90},
    {name:'Programming',value:80},
    {name:'Android development',value:60},
  ];


  works:any = [
    {name:'Responsive Web Designs',text:'Generate responsive web designs that are responsive on mobiles, laptops and desktops. Resposive and user friendly UI with great functionality according to the project need.',image:'assets/work1.jpg'},
    {name:'Rest API',text:'Build APIs to provide data for web and android applications.  Write reusable and optimized code to provide fast and accurate results to the front end projects.',image:'assets/work2.jpg'},
    {name:'Android Development',text:'Build and develop mobile applications that are smooth to use on both Android and Iphone. Resposive and user friendly UI with great functionality according to the project need.',image:'assets/work3.jpg'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
