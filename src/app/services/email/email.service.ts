import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private faqPath = environment.apiUrl + 'faq'

  constructor(private http: HttpClient) { }

  send() {
    return this.http.get(this.faqPath);
  }
}
