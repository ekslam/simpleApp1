import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushTabs(){
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  slides = [
    {
      title: "Welcome to the Beadle App!",
      description: "The <b>Beadle App</b> showcases a number of useful functions for the both the teacher and the students.",
      image: "assets/image/test.png",
    },
    {
      title: "What is the Beadle App?",
      description: "<b>Beadle App</b> is a mobile application that was developed to help the beadles in the university to record attendance efficiently and accurately, with safety measures.",
      image: "assets/image/calendar.png",
    },
    {
      title: "What to Expect in the App",
      description: "The <b>Beadle App</b> has open functionalities for the beadles to use. Attendance system is provided for beadle to help them utilize the mobile app itself.",
      image: "assets/image/global.png",
    }
  ];

}
