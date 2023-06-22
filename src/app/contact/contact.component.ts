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
  submitted:boolean = false;
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
    this.submitted = true;
    this.api.clientData('/userData',this.contactForm.value).subscribe((next:any)=>{
      console.log("response from api",next);
    })
    setTimeout(() => {
      this.api.obNotify({
        start:true,
        code:200,
        status:'success',
        message:'Details Submitted Successfully'
      })
      this.contactForm.reset();
      this.submitted = false;
      
    }, 1500);
  }

  contact(index:any){
    if(index == 0){
      window.open("https://github.com/Pankaj-Phour","_blank")
    }
    else if(index == 1){
      window.open("mailTo:pankaj.phour70@gmail.com","_blank")
    }
    else if(index == 2){
      window.open("http://wa.me/9518455298","_blank")
    }
  }

}
