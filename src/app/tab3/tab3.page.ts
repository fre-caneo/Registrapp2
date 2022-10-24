import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  code: any;
  constructor(private barcodeScanner: BarcodeScanner){}
 scan(){
  this.barcodeScanner.scan().then(barcodeData => {
  this.code = barcodeData.text;
  console.log(this.code);
    console.log('Barcode data', barcodeData);
 }).catch(err => {
     console.log('Error', err);
 });
}

}





