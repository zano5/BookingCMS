import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewScannerPage } from './view-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ViewScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewScannerPage),
    NgxQRCodeModule
  ],
})
export class ViewScannerPageModule {}
