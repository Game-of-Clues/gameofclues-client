import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faq } from 'src/app/models/Faq';
import { Game } from 'src/app/models/Game';
import { TeamMember } from 'src/app/models/TeamMember';
import { ContactService } from 'src/app/services/contact/contact.service';
import { FaqService } from 'src/app/services/faq/faq.service';
import { GameService } from 'src/app/services/game/game.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';
import { TeamMemberService } from 'src/app/services/team-member/team-member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faqs: Array<Faq>;
  games: Array<Game>;
  contacts: Array<any>;
  reservations: Array<any>;
  teamMembers: Array<TeamMember>;

  constructor(
    private faqService: FaqService,
    private gameService: GameService,
    private contactService: ContactService,
    private teamMemberService: TeamMemberService,
    private reservationService: ReservationService,
    private router: Router) {
      this.faqs = [];
      this.games = [];
      this.contacts = [];
      this.reservations = [];
      this.teamMembers = [];
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.gameService.getAll().subscribe(res => {
      this.games = res;
    });

    this.teamMemberService.getAll().subscribe(res => {
      this.teamMembers = res;
    });

    this.faqService.getAll().subscribe(res => {
      this.faqs = res;
    });

    this.contactService.getAll().subscribe(res => {
      this.contacts = res;
    });

    this.reservationService.getAll().subscribe(res => {
      this.reservations = res;

      console.log(this.reservations);
      
    });
  }
}
