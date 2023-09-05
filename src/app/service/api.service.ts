import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<any> {
    return this.http.get<any[]>(this.urlApi  + '/character');
  }

  public getEpisode(): Observable<any> {
    return this.http.get<any[]>(this.urlApi + '/episode');
  }
}
