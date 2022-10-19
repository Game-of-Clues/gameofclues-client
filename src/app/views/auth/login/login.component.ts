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
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      let user = data['user'];

      this.authService.saveToken(user['_id']);
      this.router.navigate(['/']);
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}