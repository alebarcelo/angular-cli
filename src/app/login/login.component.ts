import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginModalComponent } from './login-modal.component';

@Component({template: ''})
export class LoginComponent implements OnInit {
    bsModalRef: BsModalRef;
    config = {
        keyboard: false,
        ignoreBackdropClick: true
    };
    constructor(private modalService: BsModalService) {}

    ngOnInit() {
        this.bsModalRef = this.modalService.show(LoginModalComponent, this.config);
    }
}