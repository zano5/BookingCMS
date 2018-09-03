import { BookingProvider } from '../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController ,MenuController, AlertController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingProvider,public modalCtrl: ModalController, private menu : MenuController, private alertCtrl : AlertController) {



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


    var deviceModal = this.modalCtrl.create("AddCategoryPage", { parentPage: this});
   deviceModal.present();




  }


  update(category){




    var  deviceModal = this.modalCtrl.create("UpdateCategoryPage",{cat:category, parentPage: this });
   deviceModal.present();









  }

  delete(category){



    this.booking.deleteCategory(category);

   this.someFnToUpdateParent();










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




  someFnToUpdateParent()
{

  this.categoryList=[];
  this.booking.getCategory().subscribe(data=>{

    this.categoryList = data;

  })
}


presentAlert(category) {
  let alert = this.alertCtrl.create({
    title: 'Delete',
    subTitle: 'Do you want to delete',
    buttons: [
      {
        text: 'Yes',
        role: '',
        handler: () => {


          this.delete(category);

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


}
