import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationPath = environment.apiUrl + 'reservation';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.reservationPath);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.reservationPath, data);
  }
}

