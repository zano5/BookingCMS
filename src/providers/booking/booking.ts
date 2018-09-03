import { NavController, GESTURE_MENU_SWIPE } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {
  apiUrl='http://52.15.154.60:9000';

  constructor(public http: HttpClient) {
    console.log('Hello BookingProvider Provider');
  }


  getCategory(){
    return this.http.get(this.apiUrl+'/categories?{"$sort":{"name":1}}');
  }


  addCategory(data) {
    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/categories', JSON.stringify(data),header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  addDevice(data,alertCtrl,title) {

var value;

    if(data.available == 'yes'){
      value=true;
    }else if(data.available =='no'){
      value=false;
    }
    // var header = { "headers": {"Content-Type": "application/json"} };

    // this.http.post(this.apiUrl+'/devices',{categoryId:data.categoryId,name:data.name,serial:data.serial,available:true,deviceTypeId: data.deviceTypeId }, header).subscribe(data=>{
    //   console.log(data);
    // })
    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/devices', JSON.stringify({categoryId:data.categoryId,name:data.name,serial:data.serial,available:true,deviceTypeId: data.deviceTypeId}),header)
        .subscribe(res => {
          resolve(res);

          this.presentDevice(data,alertCtrl,title);




        }, (err) => {
          reject(err);
        });
    });
  }


  getDevices()
  {
    return this.http.get(this.apiUrl+'/devices?{"$sort":{"name":1}}');
  }





  updateCategory(data)
  {

    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/categories'+'/'+data.id, JSON.stringify(data),header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  deleteCategory(data)
  {

    var header = { "headers": {"Content-Type": "applicatio4n/json"} };
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/categories'+'/'+data.id,header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }


  updateDevice(data)
  {

    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/devices'+'/'+data.id, JSON.stringify(data),header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  deleteDevice(data){

    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/devices'+'/'+data.id,header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  login(login)
  {

    var header = { "headers": {"Content-Type": "application/json"} };

  return  this.http.post(this.apiUrl+'/admins/login',{username:login.username,password:login.password}, header);

  }


  viewBooking(){

    return this.http.get(this.apiUrl+'/bookings');

  }


  updateBooking(data){

    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/bookings'+'/'+data.id, JSON.stringify(data),header)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }


  getDeviceTypes()
  {
    return this.http.get(this.apiUrl+'/devicetypes?{"$sort":{"name":1}}');
  }


  addDeviceTypes(data,alertCtrl)
  {

    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/devicetypes', JSON.stringify({name:data}),header)
        .subscribe(res => {
          resolve(res);

         this.presentDeviceType(data,alertCtrl);


        }, (err) => {
          reject(err);
        });
    });
  }


  presentDeviceType(device, alertCtrl) {
    let alert = alertCtrl.create({
      title: 'Device Type ',
      subTitle: 'Device Type: '+device + ' Added' ,
      buttons:[{

        text: 'Dismiss',
        role: '',
        handler: () => {



        },
      }]
    });
    alert.present();
  }

  presentDevice(device,alertCtrl,title){

    let alert = alertCtrl.create({
      title: title,
      subTitle: 'Device: '+device.name + title ,
      buttons:[{

        text: 'Dismiss',
        role: '',
        handler: () => {



        },
      }]
    });
    alert.present();
  }



}
