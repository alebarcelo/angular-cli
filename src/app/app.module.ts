import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule, AccordionModule, TooltipModule, ModalModule } from 'ngx-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { ViewsModule } from './views/views.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, IntegrationService } from './_services';
import { DashboardComponent } from './dashboard';
import { LoginComponent, LoginModalComponent } from './login';
import { RegisterComponent } from './register';
import { MenuTopComponent } from './common/menu-top';
import { MenuLeftComponent } from './common/menu-left/menu-left.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        ViewsModule,
        routing,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginModalComponent,
        AlertComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        MenuTopComponent,
        MenuLeftComponent],
    entryComponents: [LoginModalComponent],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        IntegrationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
