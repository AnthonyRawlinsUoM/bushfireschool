import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface TeamMember {
  title: string;
  firstname: string;
  surname: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  configUrl = 'assets/team.json';

  constructor(private http: HttpClient) { }

  public getTeam() {
    return this.http.get<TeamMember[]>(this.configUrl);
  }
}
