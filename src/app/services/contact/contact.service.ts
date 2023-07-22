import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactPath = environment.apiUrl + 'contact-us'
  constructor(private http: HttpClient, private router: Router) { }

  send(data: any) {
    this.http.post(this.contactPath, data).subscribe(res => {
      console.log(res);
    })
  }
}
