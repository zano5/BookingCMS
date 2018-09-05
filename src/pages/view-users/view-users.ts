import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';

/**
 * Generated class for the ViewUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-users',
  templateUrl: 'view-users.html',
})
export class ViewUsersPage {

  adminList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewUsersPage');

    this.booking.getAdmins().subscribe(data=>
    {

      this.adminList = data;
      console.log(this.adminList);

    })
  }

  addUser(){

  }

}
