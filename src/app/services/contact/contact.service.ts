import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactPath = environment.apiUrl + 'contact';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.contactPath);
  }

  send(data: any) {
    this.http.post(this.contactPath, data).subscribe(res => {
      console.log(res);
    })
  }
}
