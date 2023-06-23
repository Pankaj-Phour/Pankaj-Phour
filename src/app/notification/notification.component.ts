// Some of the code is being commented out in this file. 
// If you are working on it then you can check the date of the commented code 
// and if it is older than 6 months and the code is working fine then you can go on to delete the commented code 
import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import { NotifyComponent } from '../notify/notify.component';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef }) container;
  components = [];
  messageList = [];
  componentClass = NotifyComponent;

  constructor(private resolver: ComponentFactoryResolver, private _as: ApiService, private viewContainerRef:ViewContainerRef) { }

  ngOnInit() {
    // console.log("Hello from Notification component",this.container);
    
    this._as.notify$.subscribe(next => {
      // console.log(next);
      
      if (next.start && this.messageList.indexOf(next.message) === -1) {
        this.addComponent(this.componentClass, next);
      }
    });
  }

  addComponent(componentClass: Type<any>, config) {

    // console.log(this.container,componentClass);
    
    const componentFactory = this.resolver.resolveComponentFactory(componentClass);
    const component = this.container.createComponent(componentFactory);
    // console.log(this.container,component);
    
    component.instance.status = config.status;
    component.instance.limit = config.s ? config.s : 1;
    component.instance.millis = config.ms ? config.ms : 1000;
    if (config.message === 'Login success!' || config.message === 'Logged out') {
      component.instance.limit = config.s ? config.s : 1;
      component.instance.millis = config.ms ? config.ms : 400;
    }
    component.instance.message = config.message;
    this.messageList.push(config.message);
    component.instance.code = config.code;
    component.instance.divStyle = {
      'background-color': config.status === 'error' ? '#f2dede' : config.status === 'success' ? '#dff0d8' : config.status === 'info' ? '#d9edf7' : '#fcf8e3'
    };
    component.instance.style = {
      'box-shadow': '0 0 25px -10px #323232',
      'min-height': '80',
      height: 'auto',
      width: '340px',
      'border-radius': '8px',
      animation: 'mymove .3s ease',
      color: '#fff',
      'background-color': config.status === 'error' ? '#fe4949' : config.status === 'success' ? '#5caa5d' : config.status === 'info' ? '#1d9fb4' : '#daae00',
      /*  'background-image': config.status === 'error' ? 'url(/assets/images/error.svg)' : config.status === 'success' ? 'url(/assets/images/success.svg)' : config.status === 'info' ? 'url(/assets/images/info.svg)' : config.status === 'warning' ? 'url(/assets/images/warning.svg)' : '#ffffff',*/
      //  'color': config.status === 'error' ? '#ffffff' : config.status === 'success' ? '#ffffff' : config.status === 'warning' ? '#000000' : config.status === 'info' ? '#ffffff' : '#000000',
      //  'padding': '14px 14px 24px 20px',
      position: 'relative',
      top: '0',
      left: '0',
      opacity: '1',
      marginBottom: '20px'
    };

    component.instance.elemNo = this.container.indexOf(component.hostView);

    component.instance.delete.subscribe((element) => {
      this.removeComponent(element.index);
      this.messageList.splice(element.index, 1);
    });

    this.components.push(component);
  }


  removeComponent(index) {
    if (this.container.length < 1) {
      return;
    }
    const componentRef = this.components.filter(x => x.instance.elemNo === index)[0];

    let vcrIndex: number = this.container.indexOf(componentRef);
    if(vcrIndex==-1){
      vcrIndex = 0;
    }
    this.container.remove(vcrIndex);
    this.messageList.splice(vcrIndex, 1);

    this.components = this.components.filter(x => x.instance.elemNo !== index);
    const arra = from(this.components);
    const a = arra.pipe(map((comp:any, index1) => comp.instance.elemNo = index1));
    a.subscribe(val => val);
  }
}
