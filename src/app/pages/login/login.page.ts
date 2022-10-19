import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: '',
  };

  constructor( private router: Router,private http: HttpClient ) { }

  ngOnInit() {
    this.http.get('https://nancyb3a.github.io/Test/usuarios_PGY4121_09.json')
    .subscribe(res =>{
      console.log(res);
    })
  }

  onSubmit() {
    const navegationExtras: NavigationExtras = {
      state: this.usuario
    };
    this.router.navigate(['/home'], navegationExtras);
  }

}
