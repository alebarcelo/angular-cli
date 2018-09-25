import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { User } from '../../_models';


@Component({
    selector: 'app-menu-top',
    templateUrl: './menu-top.component.html',
    styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {
    currentUser: User;
    @Input('openMenu') openMenu: boolean;
    @Output() openMenuChange = new EventEmitter<boolean>();
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {}
    toggleMenu($event) {
        $event && $event.preventDefault();
        this.openMenu = !this.openMenu;
        this.openMenuChange.emit(this.openMenu);
    }
}
