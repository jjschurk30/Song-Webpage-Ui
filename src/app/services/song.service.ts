import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions =
{
headers: new HttpHeaders({ 'Content Type': 'application/json' })
};

@Injectable()
export class SongService {

  constructor(private http: HttpClient){ }

      getSongs() {
        let token = localStorage.getItem('access_token');
        return this.http.get('server/api/v1/songs',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
        );
}

getSong(id: number) {
 let token = localStorage.getItem('access_token');
 return this.http.get('server/api/v1/songs/' + id,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
        );
}

createSongRegistration(song) {
let body = JSON.stringify(song);
 return this.http.post('/server/api/v1/songs', body, httpOptions);
}

}
