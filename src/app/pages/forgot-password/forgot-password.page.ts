import { Component, OnInit, } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})


export class ForgotPasswordPage implements OnInit {

  usuario = {
    email: '',
  };

  constructor(public alertController: AlertController, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    const navegationExtras: NavigationExtras = {
      state: this.usuario
    
    };  this.presentAlert()
    
  }
  // ALERTA
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AVISO',
      message: 'El correo de recuperación ha sido enviado a su direccion de correo.',
      buttons: ['Entendido']
    });

    await alert.present();
    this.router.navigate(['/login']);
  }

}
