import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  routerState: any;
  user: string;

  constructor(private router: Router, private activeroute: ActivatedRoute, public toasCtrl: ToastController  ) {
    this.activeroute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.routerState = this.router.getCurrentNavigation().extras.state;
          localStorage.setItem('user', this.routerState.email.split('@')[0]);
        }
      }
    );
  }

  ngOnInit(){
    this.user = localStorage.getItem('user');
  }

  clear() {

  }
  

  async toast() {
    const toast = await this.toasCtrl.create({
      message: 'Información guardada',
      duration: 2000
    });
    toast.present();
  }

}
