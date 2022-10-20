import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ContactService} from "../../../services/contact/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }
  get subject(){
    return this.contactForm.get('subject');
  }

  get content(){
    return this.contactForm.get('content');
  }

  send(){
    let value = this.contactForm.value;

    if (this.contactForm.valid) {
      this.contactService.send(value);
    }

    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

}
