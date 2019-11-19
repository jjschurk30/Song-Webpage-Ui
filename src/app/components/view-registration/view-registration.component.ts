import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

public songReg;
  constructor(private songService: SongService, private route: ActivatedRoute) { }

  ngOnInit() {
this.getSongReg(this.route.snapshot.params.id);
  }

getSongReg(id: number) {
    this.songService.getSong(id).subscribe(
        data => {
        this.songReg = data;
      },
      err => console.error(err),
      () => console.log('songs loaded')
      );
}
}
