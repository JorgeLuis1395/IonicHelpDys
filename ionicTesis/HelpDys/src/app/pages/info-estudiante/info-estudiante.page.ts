import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopoverPageEstudiante} from "../info-popover/about-popover-estudiante";

@Component({
  selector: 'app-info-estudiante',
  templateUrl: './info-estudiante.page.html',
  styleUrls: ['./info-estudiante.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InfoEstudiantePage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
    async presentPopover(event: Event) {
        const popover = await this.popoverCtrl.create({
            component: PopoverPageEstudiante,
            event
        });
        await popover.present();
    }

}
