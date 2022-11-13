import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyAuthService} from '../../service/my-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public router: Router,
    public authService: MyAuthService,
  ) {}

  ngOnInit() {
    this.authService.loadSession();
  }
}
