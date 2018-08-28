import { BookingProvider } from '../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  login={
    username:'',
    password:''
  }

  status;





  constructor(public navCtrl: NavController, public navParams: NavParams,private booking :BookingProvider, private alertCtrl: AlertController ) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');





  }

  onLogin(){


    console.log('zano');
    this.booking.login(this.login).subscribe(data=>{
     this.navCtrl.push('MenuPage');
      console.log(data);


     }, (err) =>{

      this.presentAlert();




     })









  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Authentication',
      subTitle:"Incorrect Login Details",
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
