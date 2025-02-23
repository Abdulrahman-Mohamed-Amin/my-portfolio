import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule , ReactiveFormsModule , NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  show:boolean = false

  form:FormGroup = new FormGroup ({
    name: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    email:new FormControl('' , [Validators.required , Validators.email]),
    message: new FormControl('' , [Validators.required])
  })
   user:any = {
    name:'',
    email:'',
    message:''
    }

  
  send(){
    console.log();
    
    emailjs.send('service_febam5i' , 'template_btxeyaa' , {...this.form.value} , {publicKey: 'Ut7Vw1tKZhbyB8wXp'}).then(res =>{
      this.show = true

      setTimeout(() => {
        this.show = false
      }, 2000);
    })
    
  }
}
