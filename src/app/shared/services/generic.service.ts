import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';


/**
 *
 *
 * @export
 * @class GenericService
 * @extends {BaseService}
 */
@Injectable()
export class GenericService extends BaseService {

    /**
     * Constructor
     * 
     * 
     * @method constructor
     * @param http Http
     */
    constructor(protected http: HttpClient) {
        super(http);
    }


    /**
     * Send http get request to server.
     * 
     * @method get
     * @param url string
     * @param params object
     */
    public get(url, params?): any {
        return this.__get(`${url}`, params);
    }


    /**
     * Send http put request to server.
     * 
     * @method put
     * @param url string
     * @param putBody object
     */
    public put(url, putBody): any {

        return this.__put(`${url}`, putBody);

    }


    /**
     * Send http post request to server
     * 
     * @method post
     * @param url string
     * @param postBody object
     */
    public post(url, postBody, hasBlobRes?): any {

        return this.__post(`${url}`, postBody, hasBlobRes);

    }


    /**
     * Send http delte request to server
     * 
     * @method delete
     * @param url string
     */
    public delete(url): any {

        return this.__delete(`${url}`);

    }
}
