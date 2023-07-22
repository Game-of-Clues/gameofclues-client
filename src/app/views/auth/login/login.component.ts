import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      if (data.token) {
        this.authService.saveToken(data.token);
        this.router.navigate(['']);
      } else {
        console.log(data.error);
      }
    })

  }
  ngOnInit(): void {}
}
