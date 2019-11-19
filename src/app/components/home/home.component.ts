import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

songform: FormGroup;
validMessage: string = "";





constructor(private songService: SongService) { }

  ngOnInit() {
this.songform = new FormGroup({
artistName: new FormControl('', Validators.required),
artistEmail: new FormControl('', Validators.required),
songName: new FormControl('', Validators.required),
album: new FormControl('', Validators.required),
price: new FormControl(),
purchaseDate: new FormControl(),
contact: new FormControl()
});


  }

submitRegistration() {

    if (this.songform.valid) {
        this.validMessage = "Your song registration has been submited. Thank you!";
        this.songService.createSongRegistration(this.songform.value).subscribe(
           data => {
            this.songform.reset();
            return true;
          },

         error => {
            return Observable.throw(error);
            }
          )
        }  else {
            this.validMessage = "Please fill out the form before submitting!";
}
}

}
