import { Component, OnInit } from '@angular/core';
import { View } from "../_models";
import { ViewService } from "../_services";

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})

export class ViewsComponent implements OnInit {

    recordset = {
        items       : [],
        count       : 0,
        pageSize    : 10,
        limitOffset : ''
    };

    loading = false;

    constructor(private viewService: ViewService) { }

    ngOnInit() {
        this.getViews();
    }

    getViews(limitOffset?: string) {
        limitOffset = limitOffset || this.recordset.limitOffset;

        this.loading = true;

        this.viewService.getViews(limitOffset).subscribe((views: View[]) => this.recordset.items = views );

    }
}
