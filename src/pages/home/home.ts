import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  q1 = [];
  q2 = [];

  constructor(public navCtrl: NavController, public alertController: AlertController, public dragulaService: DragulaService) {
    for (var i = 0; i < 20; i++) {
      this.q1.push("Item " + i );
      this.q2.push("Item " + i );
    }

    dragulaService.drop.subscribe((value) => {
      let alert = this.alertController.create({
        title: 'Item moved',
        subTitle: 'So much fun!',
        buttons: ['OK']
      });
      alert.present();
    });
  }


}
