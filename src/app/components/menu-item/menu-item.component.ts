import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;

  constructor(private router: Router) {
  }

  goToPage() {
    this.router.navigate([this.link]);
  }

  ngOnInit() {}

}
