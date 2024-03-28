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

  ngOnInit(){
    console.log("Hello from app component");
    this._api.healthChecker('/healthChecker').subscribe((res:any)=>{
      console.log("Hello from api response",res);
      
    })
    
  }
  
}
