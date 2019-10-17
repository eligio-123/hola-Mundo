import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre = '';

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }
  click() {
    //console.log('hola', this.nombre);
    const alerta = this.alertCtrl.create({
      title: 'Hola',
      subTitle: this.nombre,
      buttons: ['OK', 'Cancel']
    });
    alerta.present();
  }

}
