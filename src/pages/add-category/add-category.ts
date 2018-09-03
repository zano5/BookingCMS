import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';


/**
 * Generated class for the AddCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
  catergory={

    name:'',
    id:''

  };


  state;

  constructor(public navCtrl: NavController, public navParams: NavParams, private booking : BookingProvider,public modalCtrl: ModalController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

  quit(){



    this.navParams.get("parentPage").someFnToUpdateParent();



    this.navCtrl.pop();

  }

  addCategory(){

    this.booking.addCategory(this.catergory);

    this.catergory.name= "";

  }



}
