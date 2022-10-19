import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isAuthenticated = this.authService.isAuthenticated();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
