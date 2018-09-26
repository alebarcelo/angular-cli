import { Component, OnInit } from '@angular/core';
import {View} from "../../_models";

@Component({
  selector: 'app-views-detail',
  templateUrl: './views-detail.component.html',
  styleUrls: ['./views-detail.component.scss']
})
export class ViewsDetailComponent implements OnInit {
    view: View;
    constructor() { }

    ngOnInit() {
    }

    getTypeDescriptionById() {
        return 'Desc';
    }

}
