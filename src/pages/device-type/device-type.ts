import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the DeviceTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-type',
  templateUrl: 'device-type.html',
})
export class DeviceTypePage {


  deviceTypesList;


  constructor(public navCtrl: NavController, public navParams: NavParams, private booking:BookingProvider, private modalCtrl : ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceTypePage');

    this.deviceTypesList=[];
    this.booking.getDeviceTypes().subscribe(data=>{

      this.deviceTypesList = data;

    })
  }

  AddDeviceTypes(){



    var deviceModal = this.modalCtrl.create('AddDeviceTypesPage',{ "parentPage": this });
   deviceModal.present();
  }




  ionViewDidEnter() {

    this.deviceTypesList=[];
    this.booking.getDeviceTypes().subscribe(data=>{

      this.deviceTypesList = data;

    })



}


someFnToUpdateParent()
{

  this.deviceTypesList=[];
  this.booking.getDeviceTypes().subscribe(data=>{

    this.deviceTypesList = data;

  })


}


}
