import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FileService} from "../../../services/file/file.service";
import {GameService} from "../../../services/game/game.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit  {
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private fileService: FileService, private gameService: GameService) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required,],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {}

  create() {
    this.gameService.create(this.createForm.value).subscribe(res => {
      console.log(res)
    });
  }

  onFileChange(event: any) {
    const file = <File>event.target.files[0];

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (_event) => {
        const fileUrl: string = reader.result as string;

        this.fileService.upload(fileUrl).subscribe(res => {
          this.createForm.patchValue({
            imageUrl: res.secure_url
          });
        });
      }
    }
  }
}
