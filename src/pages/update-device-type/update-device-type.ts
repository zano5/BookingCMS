import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateDeviceTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-device-type',
  templateUrl: 'update-device-type.html',
})
export class UpdateDeviceTypePage {


  devType;
  type;

  constructor(public navCtrl: NavController, public navParams: NavParams,private booking: BookingProvider) {

    this.devType = this.navParams.get('deviceType');
    this.type = this.devType.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDeviceTypePage');
  }

  quit(){


    this.navParams.get("parentPage").someFnToUpdateParent();

    this.navCtrl.pop();
  }


  update(){



    this.booking.updateDeviceType(this.type);

  }

}
