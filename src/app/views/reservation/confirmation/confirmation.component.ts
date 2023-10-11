import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => this.id = params['id']);
   }

  ngOnInit(): void {
  }

}
