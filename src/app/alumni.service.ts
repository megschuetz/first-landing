import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumni } from './interfaces/alumni';

@Injectable()
export class AlumniService {
  private _url: string = './assets/alumnijobs.json';

  public _newAlumni: any = [];

  constructor(private http: HttpClient) {}

  public getAlumni(): Observable<IAlumni[]> {
    return this.http.get<IAlumni[]>(this._url);
  }

  public setAlumni(newAlumniStory: IAlumni) {
    this._newAlumni.push(newAlumniStory);
  }

  public getAddedAlumni(): IAlumni[] {
    return this._newAlumni;
  }
}
