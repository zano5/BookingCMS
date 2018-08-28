import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {


  bookingsList;

  AcceptedList=[];
  notAcceptedList=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');



this.booking.viewBooking().subscribe(data=>{

  this.bookingsList = data;

  for(let book of this.bookingsList){


    if(book.approved == false){


        this.notAcceptedList.push({deviceId: book.deviceId,userId: book.userId,project: book.project,returnDate:book.returnDate,approved: book.approved,created:book.created,id: book.id})
    }else{

      this.AcceptedList.push({deviceId: book.deviceId,userId: book.userId,project: book.project,returnDate:book.returnDate,approved: book.approved,created:book.created,id: book.id})

    }


  }



})
  }


  home(){

    this.navCtrl.pop();
  }

}
