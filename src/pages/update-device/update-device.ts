import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, AlertController  } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';

/**
 * Generated class for the UpdateDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-device',
  templateUrl: 'update-device.html',
})
export class UpdateDevicePage {

  device;

  categoryList;

  constructor(public navCtrl: NavController, public navParams: NavParams,private booking: BookingProvider,public modalCtrl: ModalController, private alertCtrl : AlertController) {

    this.device = this.navParams.get('dev');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDevicePage');

    this.booking.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }


  update(){

    if(this.device.name != '' && this.device.serial != ''){


      this.booking.updateDevice(this.device);
      this.navCtrl.pop();
      let deviceModal = this.modalCtrl.create("ViewDevicePage");
      deviceModal.present();

    }else if (this.device.name == ''){


        this.presentAlert('Device Name');


    }else if(this.device.serial == '' ){

      this.presentAlert('Device Serial');
    }



  }


  presentAlert(info) {
    let alert = this.alertCtrl.create({
      title: 'Update Record '+ info +' cannt be empty',
      subTitle: 'Update Record' + info +'cannt be empty',
      buttons: ['Dismiss']
    });
    alert.present();
  }


  quit()
  {
    this.navParams.get("parentPage").someFnToUpdateParent();

    this.navCtrl.pop();
  }
}
