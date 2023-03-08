import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumni } from './interfaces/alumni';

@Injectable()

export class AlumniService {

  private _url: string = "./assets/alumnijobs.json"

  constructor(private http: HttpClient) { }

  public getAlumni(): Observable<IAlumni[]>{
    return this.http.get<IAlumni[]>(this._url)
  }
}
