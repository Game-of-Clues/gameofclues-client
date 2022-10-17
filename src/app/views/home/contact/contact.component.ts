import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }
  get title(){
    return this.contactForm.get('title');
  }

  get message(){
    return this.contactForm.get('message');
  }

  send(){
    let value = this.contactForm.value;
    console.log(value);
    if (this.contactForm.valid) {
      this.http.post("contact.php", "nikistoyanov2005@gmail.com").subscribe();
    }

    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

}
