import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private _fb:FormBuilder) { }
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

}
