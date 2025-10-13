import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';
  constructor(private _api:ApiService){}

  // ngOnInit(){
  //   console.log("Hello from app component");
  //   this._api.healthChecker('/healthChecker').subscribe((res:any)=>{
  //     console.log("Hello from api response",res);
      
  //   })
    
  // }
    skills: string[] = [
      'Angular',
      'TypeScript',
      'React',
      'Node.js',
      'SCSS',
      'JavaScript',
      'HTML/CSS',
      'Git',
      'REST APIs',
      'MongoDB',
      'Express',
      'S3',
      'EC2',
      'Cloudfront',
      'Load Balancing',
      'Auto Scaling',
  ];

  projects: any = [
    {
      title: 'Hotel Management',
      description: 'A full-stack hotel management solution with room booking, food orders, expense management and revenue insights functionality, payment integration, and admin dashboard.',
      image: 'assets/images/projects/hotel-management1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Razorpay'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
      image: 'assets/images/projects/task-manager1.png',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Rehab Center',
      description: 'Portfolio webpage for a rehab center which contains details about the services offered by them and insights of their rehab center.',
      image: 'assets/images/projects/rehab-center1.png',
      technologies: ['Angular', 'Express', 'MongoDB', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
