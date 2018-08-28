import { BookingProvider } from '../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ModalController } from 'ionic-angular';

/**
 * Generated class for the UpdateCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-category',
  templateUrl: 'update-category.html',
})
export class UpdateCategoryPage {

  catergory={

    name:'',
    id:''

  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private booking: BookingProvider,private alertCtrl: AlertController,public modalCtrl: ModalController) {

    this.catergory = this.navParams.get('cat');
    console.log(this.catergory);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateCategoryPage');
  }

  updateCategory(catergory){

    this.booking.updateCategory(this.catergory);


    this.navCtrl.push('CatPage');




  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Updated',
      subTitle: this.catergory.name + ' record updated',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
