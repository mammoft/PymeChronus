import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {

    this.authService.getAuth().subscribe( auth => {
      if (auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      }else{
        this.isLogin = false
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
