import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
