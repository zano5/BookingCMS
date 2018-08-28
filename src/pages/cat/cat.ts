import { BookingProvider } from '../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController ,MenuController } from 'ionic-angular';

/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {

  categoryList;
  deviceList;


  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingProvider,public modalCtrl: ModalController, private menu : MenuController) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
    this.categoryList =[];
    this.deviceList = [];

    this.booking.getCategory().subscribe(data=>{

      this.categoryList = data;
    })


    this.booking.getDevices().subscribe(data=>{

      this.deviceList = data;
    })





  }

  AddCatergory(){


    var deviceModal = this.modalCtrl.create("AddCategoryPage");
   deviceModal.present();




  }


  update(category){



    var  deviceModal = this.modalCtrl.create("UpdateCategoryPage",{cat:category});
   deviceModal.present();





   this.categoryList =[];

   this.booking.getCategory().subscribe(data=>{

     this.categoryList = data;
   })



  }

  delete(category){



    this.booking.deleteCategory(category);

    this.navCtrl.setRoot('CatPage');


    this.categoryList =[];

    this.booking.getCategory().subscribe(data=>{

      this.categoryList = data;
    })







  }

  refresh(){





  }


  view(category)
  {



    var deviceModal = this.modalCtrl.create('ViewCategoryPage', {cat: category});
   deviceModal.present();

  }


  home(){

    this.navCtrl.setRoot('MenuPage');
  }






}
