import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
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
      'Python',
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
      liveUrl: '',
      githubUrl: '#',
      detailedDescription: 'A comprehensive hotel management platform built to handle and store users data. The platform features a modern, intuitive interface with secured user login and data processing, and advanced revenue insights and user management for business owners. Built with performance and scalability in mind, it handles thousands of concurrent users while maintaining sub-second page load times.',
      challenge: 'The main challenge was managing the security and privacy for different roles like which role can use which service. And another challenge was to send notifications to users about checkout time, food order status or other details.',
      solution: 'Implemented role management system with sending encrypted tokens to frontend in browser with the user details so  the next time when a user requests a service first the user details were decrypted from the token and then service is granted to user on its role basis.',
      features: [
        'Real-time data synchronization across hotel rooms',
        'Advanced bookings search with filters like name, contact etc.',
        'Secure payment processing with multiple payment gateway integrations',
        'Comprehensive admin dashboard with revenue insights and expense management',
        'Responsive design optimized for mobile and desktop view',
      ],
      screenshots: [
        'assets/images/projects/hotel-management2.png',
        'assets/images/projects/hotel-management3.png',
        'assets/images/projects/hotel-management4.png',
        'assets/images/projects/hotel-management5.png'
      ],
      metrics: [
        { label: 'Daily Active Users', value: '1K+', icon: 'users' },
        { label: 'Page Load Time', value: '< 1s', icon: 'rocket' },
        { label: 'Uptime', value: '99.9%', icon: 'award' }
      ],
      timeline: '1 month',
    },
    {
      title: 'Gym management',
      description: 'A full-stack Gym management solution with workout section, user login, Schedule details and revenue insights functionality, payment integration, and admin dashboard.',
      image: 'assets/images/projects/gym-management1.jpg',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: '',
      githubUrl: 'https://github.com/Pankaj-Phour/GymPortal',
      detailedDescription: 'A comprehensive gym management platform built to handle and store users data. The platform features a modern, intuitive interface with secured user login and data processing, and advanced revenue insights and user management for business owners. Built with performance and scalability in mind, it handles thousands of concurrent users while maintaining sub-second page load times.',
      challenge: 'The main challenge was managing the security and privacy for different roles like which role can use which service. And another challenge was to send notifications to users about plan expire, plan update or other details like public holiday, gym events etc.',
      solution: 'Implemented role management system with sending encrypted tokens to frontend in browser with the user details so  the next time when a user requests a service first the user details were decrypted from the token and then service is granted to user on its role basis.',
      features: [
        'Real-time data synchronization across users',
        'Advanced users search with filters like plan, name etc.',
        'Secure payment processing with multiple payment gateway integrations',
        'Comprehensive admin dashboard with revenue insights and reporting',
        'Responsive design optimized for mobile and desktop view',
      ],
      screenshots: [
        'assets/images/projects/gym-management2.png',
        'assets/images/projects/gym-management3.png',
        'assets/images/projects/gym-management4.png',
        'assets/images/projects/gym-management5.png'
      ],
      metrics: [
        { label: 'Daily Active Users', value: '1K+', icon: 'users' },
        { label: 'Page Load Time', value: '< 1s', icon: 'rocket' },
        { label: 'Uptime', value: '99.9%', icon: 'award' }
      ],
      timeline: '1 month',
    },
    {
      title: 'Interior Designer',
      description: 'Portfolio webpage for a interior designer firm which contains details about the services offered by them and insights of their projects and work.',
      image: 'assets/images/projects/interior-designer1.png',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: 'https://dsmdecore.com/',
      githubUrl: 'https://github.com/Pankaj-Phour/interior-designing',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
      image: 'assets/images/projects/task-manager1.png',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: 'https://pankaj-taskmanager.netlify.app/',
      githubUrl: 'https://github.com/Pankaj-Phour/Task-Manager',
    },
    {
      title: 'Rehab Center',
      description: 'Portfolio webpage for a rehab center which contains details about the services offered by them and insights of their rehab center.',
      image: 'assets/images/projects/rehab-center1.png',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: 'https://humanawellness.org',
      githubUrl: 'https://github.com/Pankaj-Phour/Medical-equipments',
    },
    {
      title: 'Real Estate',
      description: 'Portfolio webpage for a real estate firm which contains details about the projects, services offered by them and insights of their team and work.',
      image: 'assets/images/projects/gorealtors1.png',
      technologies: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
      liveUrl: 'https://gorealtors.co',
      githubUrl: 'https://github.com/Pankaj-Phour/GoRealtors',
    },
  ];
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
