import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  constructor(private _fb:FormBuilder, private api:ApiService) { }
formValidation(){
  this.contactForm = this._fb.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.email, Validators.required])],
    message:['',Validators.required]
  })
}
  ngOnInit(): void {
    this.formValidation();
  }

  submit(){
    this.api.clientData('/userData',this.contactForm.value).subscribe((next:any)=>{
      console.log("response from api",next);
      this.contactForm.reset();
    })
  }

}
