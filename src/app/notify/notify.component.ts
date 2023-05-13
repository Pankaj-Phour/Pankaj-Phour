// Some of the code is being commented out in this file. 
// If you are working on it then you can check the date of the commented code 
// and if it is older than 6 months and the code is working fine then you can go on to delete the commented code 
import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  @Input() limit: any;
  @Input() millis: any;
  @Input() message: any;
  @Input() status: any;
  @Input() style: any;
  @Input() divStyle: any;
  @Input() elemNo: any;
  @Input() code: any;
  @Output() delete = new EventEmitter();
  value: any;
  v: any;
  constructor(private elem: ElementRef) {}
  ngOnInit() {
    console.log("Hello from notify component");
    
    if (this.message.toLowerCase().search('otp') === -1) {
      this.message.toLowerCase().replace('otp', 'OTP');
    }
    const source = interval(this.millis);
    /*  const subscribe = source.subscribe(second => {
        this.value = ((second * this.millis % 600) / 1000).toFixed(0);
        this.v = (100 / this.limit) * this.value;
        if (parseInt(this.value, 10) === this.limit) {
          setTimeout( () => {
            this.elem.nativeElement.children[0].style.animation = 'exit .3s ease';
          }, this.millis);
          setTimeout(() => this.delete.emit({index: this.elemNo}), this.millis + 200);
          subscribe.unsubscribe();
        }
     }); */
    const subscribe = source.subscribe(second => {
      if (second === this.limit) {
        setTimeout( () => {
          this.elem.nativeElement.children[0].style.animation = 'exit .3s ease';
        }, this.millis);
        setTimeout(() => this.delete.emit({index: this.elemNo}), this.millis + 200);
        subscribe.unsubscribe();
      }
    });
  }

  notifyDelete() {
    this.elem.nativeElement.children[0].style.animation = 'exit .3s ease';
    setTimeout( () => {
      this.delete.emit({index: this.elemNo});
    }, 300);
  }
}
