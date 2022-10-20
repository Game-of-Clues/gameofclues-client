import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  private teamMembersPath = environment.apiUrl + 'team-member'

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<any> {
    return this.http.get(this.teamMembersPath);
  }
}
