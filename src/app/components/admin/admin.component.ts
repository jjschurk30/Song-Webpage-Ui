import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public songs;

  constructor(private songService: SongService) { }



  ngOnInit() {
  this.getSongs();
  }

getSongs() {
this.songService.getSongs().subscribe(
data => { this.songs = data},
err => console.error(err),
()=> console.log('songs loaded')
);
}
}
