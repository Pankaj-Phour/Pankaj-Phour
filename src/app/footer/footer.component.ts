import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
    setTimeout(() => {
      this.api.obNotify({
        start:true,
        code:200,
        status:'success',
        message:'Details submitted successfully.'
      })
      this.contactForm.reset();
    }, 3000);
    this.api.clientData('/userData',this.contactForm.value).subscribe((next:any)=>{
      console.log("response from api",next);
    })
  }

}
