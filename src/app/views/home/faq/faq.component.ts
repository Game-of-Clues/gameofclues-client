import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {FaqService} from "../../../services/faq/faq.service";
import {Faq} from "../../../models/Faq";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Array<Faq>;
  constructor(private faqService: FaqService, private router: Router) {
    this.faqs = [];
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.faqService.getAll().subscribe(res => {
      this.faqs = res;
    })
  }
}
