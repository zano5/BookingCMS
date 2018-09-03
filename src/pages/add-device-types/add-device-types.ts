import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddDeviceTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-device-types',
  templateUrl: 'add-device-types.html',
})
export class AddDeviceTypesPage {

  devType;

  constructor(public navCtrl: NavController, public navParams: NavParams,private booking: BookingProvider, private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDeviceTypesPage');
  }

  AddDeviceTypes()
  {

    this.booking.addDeviceTypes(this.devType,this.alertCtrl);

    this.devType = "";

  }


  quit()
  {

    this.navParams.get("parentPage").someFnToUpdateParent();



    this.navCtrl.pop();
  }


}
