import { BookingProvider } from './../../providers/booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController, MenuController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare var Chart;

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

   catergoryNum;
   catergory;
   deviceNum;
   deviceList;

   categoryList;

  bookingsList;



  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private booking: BookingProvider,private alertCtrl: AlertController, private menu: MenuController) {





  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');



    this.booking.getCategory().subscribe(data=>{
      this.catergory = data;
     this.catergoryNum =this.catergory.length;



  })


  this.booking.getDevices().subscribe(data=>{

     this.deviceList = data;
     console.log(this.deviceList);

    this.deviceNum =this.deviceList.length;


  })


//   var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: 'Devices Booked',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });





this.booking.viewBooking().subscribe(data=>{

  this.bookingsList = data;

})





  }

  onView(type){

   if(type === 'view-device'){


  this. presentDeviceModal();
    }else if(type=== 'category'){

    this.presentCategoryModal();



    }

  }

  presentCategoryModal() {
  let categoryModal = this.modalCtrl.create("CatPage");
   categoryModal.present();
  }

  presentDeviceModal() {
    let categoryModal = this.modalCtrl.create("ViewDevicePage");
    categoryModal.present();

  }


  logout(){

    this.navCtrl.setRoot('HomePage');

  }

  acceptRequest(booking){

    for(let device of this.deviceList)
    {

      console.log(device);

      if(device.id == booking.deviceId){

        console.log(device.id);

        if(booking.approved == true){


          booking.approved= false;
          device.available= false;

         }else {

          booking.approved= true;
          device.available = true;
         }


         console.log(booking.approved);


      this.booking.updateBooking(booking);
      this.booking.updateDevice(device);

      }




    }





  }


  presentAlert(booking) {
    let alert = this.alertCtrl.create({
      title: 'Booking Request',
      subTitle: 'Change Booking Status',
      buttons: [
        {
          text: 'Yes',
          role: '',
          handler: () => {


        this.acceptRequest(booking);
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

  menuOpen(){


    this.menu.open();

  }





}
