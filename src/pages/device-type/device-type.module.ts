import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceTypePage } from './device-type';

@NgModule({
  declarations: [
    DeviceTypePage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceTypePage),
  ],
})
export class DeviceTypePageModule {}
