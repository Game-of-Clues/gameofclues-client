import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TeamMember} from "../../../models/TeamMember";
import {TeamMemberService} from "../../../services/team-member/team-member.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamMembers: Array<TeamMember>;
  constructor(private teamMemberService: TeamMemberService, private router: Router) {
    this.teamMembers = [];
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.teamMemberService.getAll().subscribe(res => {
      this.teamMembers = res;
    })
  }
}
