import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.id = res['id'];
    });
  }

  ngOnInit(): void {
  }

}
