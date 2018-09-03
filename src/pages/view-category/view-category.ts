import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';

/**
 * Generated class for the ViewCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-category',
  templateUrl: 'view-category.html',
})
export class ViewCategoryPage {


  deviceList;

  deviceCatList=[];

  category;





  constructor(public navCtrl: NavController, public navParams: NavParams,private booking: BookingProvider) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCategoryPage');



    this.category = this.navParams.get('cat');
  this.booking.getDevices().subscribe(data=>{



        this.deviceList = data;



        if(this.deviceList.length != 0)
        {


          console.log(this.deviceList);

      for(let device of this.deviceList){

        if(device.categoryId == this.category.id ){


          this.deviceCatList.push({name: device.name, serial: device.serial, available: device.available });
          console.log('New list', this.deviceCatList);

        }



      }

    }


    });



  }


  end(){

    this.navCtrl.pop();

  }

}
