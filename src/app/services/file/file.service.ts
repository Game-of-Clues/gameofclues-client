import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private filePath = environment.apiUrl + 'file/';

  constructor(private http: HttpClient) { }

  upload(data: string): Observable<any> {
    let image = {
      image: data
    }
    return this.http.post(this.filePath + 'upload', image);
  }
}
