import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController  } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


/**
 * Generated class for the ViewDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-device',
  templateUrl: 'view-device.html',
})
export class ViewDevicePage {

  deviceList;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private booking: BookingProvider, private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {


    this.booking.getDevices().subscribe(data=>{

      this.deviceList = data;
    })

  }


  AddDevice(){


    let deviceModal = this.modalCtrl.create("AddDevicePage", {parentPage: this});
   deviceModal.present();




  }



  update(device)
  {

    var deviceModal = this.modalCtrl.create("UpdateDevicePage",{dev:device,parentPage: this});
    deviceModal.present();
  }

  delete(device)
  {


    this.booking.deleteDevice(device);
    this.navCtrl.pop();
    var deviceModal = this.modalCtrl.create("ViewDevicePage");
    deviceModal.present();
  }



  view(device){

    var deviceModal = this.modalCtrl.create("ViewScannerPage",{dev:device});
    deviceModal.present();
  }

  quit()
  {

  }



presentDeleted(device) {
  let alert = this.alertCtrl.create({
    title: 'Delete',
    subTitle: 'Do you want to delete phone: '+device.name ,
    buttons:[{

      text: 'Yes',
      role: '',
      handler: () => {

        this.delete(device);


      },
    },
    {

      text: 'No',
      role: '',
      handler: () => {




      },
    }]
  });
  alert.present();
}



someFnToUpdateParent()
{

  this.deviceList=[];
  this.booking.getDevices().subscribe(data=>{

    this.deviceList = data;

  })
}

}
