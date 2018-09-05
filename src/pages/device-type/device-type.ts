import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController } from 'ionic-angular';

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
  deviceList;
  count=0;


  constructor(public navCtrl: NavController, public navParams: NavParams, private booking:BookingProvider, private modalCtrl : ModalController, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceTypePage');

    this.deviceTypesList=[];
    this.booking.getDeviceTypes().subscribe(data=>{

      this.deviceTypesList = data;

    })


    this.deviceList = [];

    this.booking.getDevices().subscribe(data=>{

      this.deviceList = data;
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


delete(dev){

  this.booking.deleteDeviceType(dev);
  this.someFnToUpdateParent();


}


update(dev)
{

  var deviceModal = this.modalCtrl.create('UpdateDeviceTypePage', {deviceType: dev,parentPage: this });
  deviceModal.present();


}


presentAlert(dev) {
  let alert = this.alertCtrl.create({
    title: 'Delete',
    subTitle: 'Do you want to delete ' + dev.name ,
    buttons: [
      {
        text: 'Yes',
        role: '',
        handler: () => {


          this.delete(dev);

          this.someFnToUpdateParent();


        },

      },{
        text: 'cancel',
        role: 'role',
        handler: () => {



        }
      }
        ]
  });
  alert.present();
}


deviceTypeCheck(devType)
{

  for(let dev of this.deviceList){


    if(devType.id == dev.deviceTypeId){

      this.count+=1;

    }


  }


  if(this.count == 0)
  {

    this.presentAlert(devType);
  }else{

    this.available(this.count);
    this.count = 0;

  }
}



available(count) {
  let alert = this.alertCtrl.create({
    title: 'Available Devices',
    subTitle: 'There are ' + count + ' devices attached to the device type' ,
    buttons: [
    {
        text: 'Dismiss',
        role: 'cancel',
        handler: () => {



        }
      }
        ]
  });
  alert.present();
}


}
