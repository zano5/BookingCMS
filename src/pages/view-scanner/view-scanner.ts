import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ViewScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-scanner',
  templateUrl: 'view-scanner.html',
})
export class ViewScannerPage {

  device;
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.device = this.navParams.get('dev');
    this.createdCode = this.device.serial;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewScannerPage');
  }



  quit(){


    //this.navParams.get("parentPage").someFnToUpdateParent();

    this.navCtrl.pop();
  }




}
