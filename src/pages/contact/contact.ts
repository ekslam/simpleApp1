import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
    'English Class',
    'Chinese Class'
];

itemSelected(item: string) {
  //console.log("Selected item", item);
  this.navCtrl.push(HomePage);
}

  constructor(public navCtrl: NavController) {
    
  }

}
