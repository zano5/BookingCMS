import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage: string= 'DetailPage';
  pages: Array<{title: string, icon:string,component : any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {

    this.menu.open();

    this.pages = [



      { title: 'Category',icon: 'albums', component: 'CatPage' },
      { title: 'Devices',icon:'phone-portrait', component: 'ViewDevicePage'},
      {title: 'Bookings',icon:'book',component:'BookingPage'},
      {title: 'Types of Devices',icon:'phone-portrait',component:'DeviceTypePage'},
      {title: 'Users',icon:'person',component:'ViewUsersPage'}


    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
