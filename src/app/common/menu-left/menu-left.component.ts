import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
    oneAtATime: boolean;
    menu: any[];
    @Input('openMenu') openMenu: boolean;
    constructor() {
        this.oneAtATime = true;
        this.menu = [
            { name: 'dashboard', label: 'Dashboard', icon: 'mdi-home', children: [] },
            { name: 'views', label: 'Vistas', icon: 'mdi-view-dashboard', children: [] },
            { name: 'integrations', label: 'Integraciones', icon: 'mdi-dip-switch', children: [] },
            { name: 'scheduler', label: 'Tareas programadas', icon: 'mdi-progress-clock', children: [] }
        ];
    }

  ngOnInit() {
  }

}
