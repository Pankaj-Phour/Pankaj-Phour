import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
nav:any;
burger:any;
navOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.burger = document.getElementById('burger');
     this.nav    = document.getElementById('main-nav');
  }

toggleNav(){
  console.log("Hello from toggle nav");
  setTimeout(() => {
    
    this.navOpen = !this.navOpen;
  }, 100);
  // this.classList.toggle('is-open');
	this.nav.classList.toggle('is-open');
}



/* Onload demo - dirty timeout */

reload(){
  window.location.reload();
}
}


