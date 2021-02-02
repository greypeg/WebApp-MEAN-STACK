import { Component, OnInit } from '@angular/core';
import {SmartSpeakerService} from '../smart-speaker.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ami-fullstack-winningcond',
  templateUrl: './winningcond.component.html',
  styleUrls: ['./winningcond.component.scss']
})
export class WinningcondComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    const speaker = new SmartSpeakerService();
    speaker.addCommand('back',() =>{this.help();});
    speaker.addCommand('go back',() =>{this.help();});
  }

  public help() {
    this.router.navigate(['/help']);
  }

}
