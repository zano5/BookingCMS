import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDeviceTypesPage } from './add-device-types';

@NgModule({
  declarations: [
    AddDeviceTypesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDeviceTypesPage),
  ],
})
export class AddDeviceTypesPageModule {}
