import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datauser:any;
  array: []
  user = {
    username: '',
    password: '',
  };
constructor(
  public api: ApiService,
  private router: Router ){}

//api

async getDataUser(){
  await this.api.getDataUser()
    .subscribe(res => {
      this.array = res
      console.log(res)
      this.datauser = res.alumnos;
      console.log(this.datauser);
      }, err => {
        console.log(err);
      });
    }; 

    metodo() {
      const navegationExtras: NavigationExtras = {
        state: {user: this.user}
      };
      //
      for(let i = 0; i < this.datauser.length; i++){
        if(this.datauser[i].username == this.user.username && this.datauser[i].password == this.user.password){
        console.log('funciona');
        this.router.navigate(['/tabs/tab1'], navegationExtras);
        break
      }else{
        console.log('usuario no encontrado')
        }
      }
    }

  ngOnInit(): void {
    this.getDataUser();
  }


}
