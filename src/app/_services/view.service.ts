import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { View } from '../_models';
import { SinglePurchaseProductDetailView } from '../_models';
import { BulkPurchaseProductDetailView } from '../_models';
import { SinglePurchaseCategoryDetailView } from '../_models';
import { BulkPurchaseCategoryDetailView } from '../_models';

import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ViewService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient/*,
        private messageService: MessageService*/) { }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    private log(message: string) {
        //this.messageService.add(`ViewService: ${message}`);
    }

    getRoles() {
        return this.http.get(this.apiUrl + '/company/role');
    }

    getLayouts() {
        return this.http.get(this.apiUrl + '/layout');
    }

    getViews(limitOffset?: string): Observable<View[]> {
        limitOffset = limitOffset || '10/0';
        return this.http.get<View[]>(this.apiUrl + '/view/' + limitOffset)
            .pipe(
                tap(views => this.log('fetched views')),
                catchError(this.handleError('getViews', []))
            );
    }

    getViewById(id: number): Observable<View> {
        return this.http.get<View>(this.apiUrl + '/view/' + id).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<View>(`getViewById id=${id}`))
        );
    }

    deleteView(view: View | number): Observable<View> {
        const id = typeof view === 'number' ? view : view.id;
        return this.http.delete<View>(this.apiUrl + '/view/' + id, httpOptions).pipe(
            tap(_ => this.log(`deleted view id=${id}`)),
            catchError(this.handleError<View>('deleteView'))
        );
    }

    createSinglePurchaseProductDetail(view: SinglePurchaseProductDetailView): Observable<SinglePurchaseProductDetailView> {
        return this.http.post<SinglePurchaseProductDetailView>(this.apiUrl + '/view/product/single-purchase', view, httpOptions)
            .pipe(
                tap((v: SinglePurchaseProductDetailView) => this.log(`added hero w/ id=${v.id}`)),
                catchError(this.handleError<SinglePurchaseProductDetailView>('createSinglePurchaseProductDetail'))
            );
    }

    createBulkPurchaseProductDetail(data: BulkPurchaseProductDetailView) {
        return this.http.post(this.apiUrl + '/view/product/bulk-purchase', data, httpOptions);
    }

    createSinglePurchaseCategoryDetail(data: SinglePurchaseCategoryDetailView) {
        return this.http.post(this.apiUrl + '/view/category/single-purchase', data, httpOptions);
    }

    createBulkPurchaseCategoryDetail(data: BulkPurchaseCategoryDetailView) {
        return this.http.post(this.apiUrl + '/view/category/bulk-purchase', data, httpOptions);
    }

    updateSinglePurchaseProductDetail(view: SinglePurchaseProductDetailView): Observable<any> {
        return this.http.patch(this.apiUrl + 'view/product/single-purchase' + view.id, view, httpOptions)
            .pipe(
                tap(_ => this.log(`updated hero id=${view.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    updateBulkPurchaseProductDetail(data: BulkPurchaseProductDetailView) {
        return this.http.patch(this.apiUrl + 'view/product/bulk-purchase' + data.id, data, httpOptions);
    }

    updateSinglePurchaseCategoryDetail(data: SinglePurchaseCategoryDetailView) {
        return this.http.patch(this.apiUrl + 'view/category/single-purchase' + data.id, data, httpOptions);
    }

    updateBulkPurchaseCategoryDetail(data: BulkPurchaseCategoryDetailView) {
        return this.http.patch(this.apiUrl + 'view/category/bulk-purchase' + data.id, data, httpOptions);
    }
}
