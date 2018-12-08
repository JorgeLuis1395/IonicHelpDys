import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import {List} from "@ionic/angular";


@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailPage {
  speaker: any;
    queryText = '';
    @ViewChild('estudianteList') estudianteList: List;
  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  goToSessionDetail(session: any) {
    this.router.navigateByUrl(`app/tabs/(schedule:session/${session.id})`);
  }
}
