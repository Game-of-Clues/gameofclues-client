import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Game} from "../../models/Game";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamePath = environment.apiUrl + 'game';

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.gamePath, data);
  }

  getAll(): Observable<any> {
    return this.http.get(this.gamePath);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(this.gamePath + '/' + id)
  }
}
