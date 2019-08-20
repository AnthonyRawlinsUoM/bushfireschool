import { Component, OnInit } from '@angular/core';
import { TeamService, TeamMember } from '../team.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: TeamMember[] = [];

  constructor(private teamservice: TeamService) { }

  ngOnInit() {
    this.teamservice.getTeam().subscribe((data: TeamMember) => {
      console.log(data);
      this.team.push(data);
    }
      //  this.team = {
      //   title = data['title'];
      //   firstname = data['firstname'];
      //   surname = data['surname'];
      //   role = data['role'];
      // }
    );
  }

}
