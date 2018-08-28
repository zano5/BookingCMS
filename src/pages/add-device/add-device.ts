
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingProvider } from '../../providers/booking/booking';

/**
 * Generated class for the AddDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;
@IonicPage()
@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {

  url: string;
  imageURI:'';
  valid;

  downloadUrl;



  dev={
    name:'',
    serial:'',
    categoryId:'',
    image:'',
    available:''


  }

  uploadFile;

  device: FormGroup;

  categoryList;



  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingProvider, private fb: FormBuilder,private alertCtrl: AlertController) {




    this.uploadFile = firebase.storage().ref('files');



    this.device = this.fb.group({


      name:['',[Validators.required]],
      serial:['',[Validators.required]],
      categoryId:['',[Validators.required]],

      image:[]

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');

    this.booking.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

  addEnd(){
    this.navCtrl.pop();
  }

  quit(){

    this.navCtrl.setRoot('ViewDevicePage');

  }


  formSubmit({value,valid}:{value:Device,valid:boolean}){

    this.dev.name= value.name;
    this.dev.available= value.available;
    this.dev.serial = value.serial;
    this.dev.categoryId= value.categoryId;
    this.dev.image = this.downloadUrl;


    console.log(value);



    // this.booking.addDevice(this.dev).then(()=>{
    //   this.presentAlert();
    // })


    //this.booking.addDevice(this.dev);

    this.booking.addDevice(this.dev);
    this.presentAlert();

    this.device.reset();


  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Device Added',
      subTitle: this.dev.name,
      buttons: ['Dismiss']
    });
    alert.present();
  }


  onUpload(){


  }



onSelectFile(event) { // called each time file input changes


  this.url = event.target.value;

  console.log(this.url);

  //this.uploadFire(this.url);
}






uploadFire(url)
{


  var filename = "test.jpg";
                    var storageRef = firebase.storage().ref('/images/' + filename);

                    var message = 'data:image/jpg;base64,' + url;
                    storageRef.putString(message, 'data_url').then(function (snapshot) {
                        console.log('Uploaded a data_url string!');
                    });



}


uploadAlert() {
  let alert = this.alertCtrl.create({
    title: 'File Uploaded',
    buttons: ['Dismiss']
  });
  alert.present();
}










}