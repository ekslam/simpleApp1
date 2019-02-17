import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ClassListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-list',
  templateUrl: 'class-list.html',
})
export class ClassListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassListPage');
  }

  showAlertRight(){
    const alert = this.alertCtrl.create({
      title: "Attendance Recorded",
      subTitle: 'The student has been marked absent.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertLeft(){
    const alert = this.alertCtrl.create({
      title: "Attendance Recorded",
      subTitle: 'The student has been marked late.',
      buttons: ['OK']
    });
    alert.present();
  }

  delete(slidingItem:ItemSliding) {
    alert('Working');
    slidingItem.close();
  }

  // logDrag(item) {
  //   let percent = item.getSlidingPercent();
  //   if (percent > 0) {
  //     percent = 1;
  //     this.showAlertRight();
  //   }
  //   else {
  //     this.showAlertLeft();
  //   }
  // }

  logDrag(item) {
    let x = item.getSlidingPercent();
    if ( x > 0) {
      this.showAlertLeft();
    }
    else {
      this.showAlertLeft();
    }
    
  }

}
