import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewService } from '../_services';
import { ViewsListComponent } from './list';
import { ViewsDetailComponent } from './detail';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards';

const viewsRoutes: Routes = [
    { path: 'views', redirectTo: 'views/list', canActivate: [AuthGuard] },
    { path: 'views/list', component: ViewsListComponent, canActivate: [AuthGuard] },
    { path: 'views/new', component: ViewsDetailComponent, canActivate: [AuthGuard] },
    { path: 'views/edit/:{id}', component: ViewsDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(viewsRoutes)
    ],
    declarations: [ViewsListComponent, ViewsDetailComponent],
    providers: [ViewService]
})

export class ViewsModule { }
