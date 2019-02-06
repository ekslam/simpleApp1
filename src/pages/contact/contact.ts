import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

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
  this.navCtrl.push(TabsPage);
}

  constructor(public navCtrl: NavController) {
    
    
  }

}
