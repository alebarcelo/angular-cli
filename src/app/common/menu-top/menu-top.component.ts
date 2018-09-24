import { Component } from '@angular/core';
import { User } from '../../_models';


@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
    styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {
    currentUser: User;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
