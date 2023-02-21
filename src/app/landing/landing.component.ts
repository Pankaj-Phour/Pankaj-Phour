import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
loading:boolean = true;
  constructor() { }
  Projects:any = [
    { name:'Get User Location' , image:'/assets/Map.png' , description:"In this project user is asked for location permission as the page loads/initializes. And as the user allows location permission the project loads world map and then detects user's ip address and locate it onthe world map. It zooms out the location upto 18 times and put a marker on the user's location. It's accuracy rate is above 90%. This project is built on Angular version 14 and node version 16.16.0. You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://pankajphour-getuserlocation.netlify.app/'},
    { name:'Tour & Travels' , image:'/assets/Tour&Travels.png' , description:"This is a project built on Reactjs. This is a Tour and Travels webpage where you'll find a lot of places to go and travel. Here you can find places all around the world.Along with india it also offers tourism points on islands and around the world in various countries. Here you can also find sports and adventures to go for. This webpage represents nature's beauty in such a way that it's affordable and you're gonna fall in love with nature once you visit this page.  You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://tour-travel.netlify.app/'},
    { name:'Quiz' , image:'/assets/quiz.png' , description:"In this project there is a Intro component from where you can login or signup and then start the test. As the test/Question page loads there user will be asked some random question to check his/her IQ. He will have two options to answer the question or to skip the question and move on to next question.  Total 15 questions will be asked from user and on this basis his/her IQ score will be shown on the final result page.This is a project built on Angularversion 14 and node version 16.16.0. You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://github.com/Pankaj-Phour/'},
    { name:'Login Dashboard' , image:'/assets/dashboard.png' , description:"This is a project built on Angular version 14 and node version 16.16.0. In this project there is a login component in which we ask user for his/her email and password and after successfully getting email and password the user will be redirected to dashboard page. Dashboard contains a list of people's id and name with image structured in a awesome design. It also contains a search filter on dashboard page from where you can lookup for a specific person by name or by id.You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://locationapi.onrender.com/'},
    { name:'Node Api' , image:'/assets/nodeApi.png' , description:"This is a node project built on node version 16.16.0. In this project you'll find a lot of api that are being used in my angular and React projects. This project is being hosted on heroku and can be used in any corner of world. This project's api use my personal online mongodb to store and fetch data. Here you'll find api's for video storing and image storing. This project contains api's of GET, POST and UDATE type. This is the backend of all my dynamic projects. As this project is hosted for free therefore it have a limit of 100 requests per day. You can call the api's only 100 times. I'm working on it to find a better solution for it's hosting and to solve it's call request problem. You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://nodeapi-pwyk.onrender.com/'},
    { name:'Face Detection' , image:'/assets/faceDetection.png' , description:"This is a project built on Angular version 14 and node version 16.16.0. In this project there is a camera component in which we ask user for camera permission as the page loads/initializes. And as the user allows camera permission a video element renders on the screen  with user's webcam video feed as video's src in it. Then the project loads some models from TensorFlow and use them to detect what is inside of the video  feed of user. Then it checks the data and fetch out the number of person visible in the user's webcam. It's accuracy rate is above 90%. You can use this project and it's code according to your use. Feel free to use the code but don't forget to give it  a star if you like it.", url:'https://pankajphour-uservideo.netlify.app/'},
  ]

  ngOnInit(): void {
    setTimeout(() => {
      // loader.style.display = 'none'
      localStorage.setItem('loader',JSON.stringify(false))
      this.checkLoading()
    }, 1000);
  }


  checkLoading(){
    setTimeout(() => { 
      const loader = localStorage.getItem('loader');
      if (loader) {
        JSON.parse(loader)
     JSON.parse(loader)!==false ? this.checkLoading() : this.loading = false;
      }
    }, 1000);
  }


  connect(){
    window.open('https://github.com/pankaj-phour','_blank')
  }
}
