import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface RequestConfig {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
  responseType?: 'json';
}

@Injectable({ providedIn: 'root' })
export class BaseService {

  private apiUrl = environment.backendURL;
  private config: RequestConfig;

  constructor(protected http: HttpClient) {
    this.config = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    };
  }

  // tslint:disable-next-line: typedef
  private appendToken() {
    this.config = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    };
    const token = localStorage.getItem('token');
    if (token && !this.config.headers.has('token')) {
      this.config.headers = this.config.headers.append('token', token);
    }
  }

  // tslint:disable-next-line: typedef
  private appendParams(params: object) {
    this.config.params = new HttpParams();
    Object.keys(params).forEach((key) => {
      this.config.params = this.config.params.append(key, params[key]);
    });
  }

  private handleError(error) {

    console.warn(error);

    return throwError('Server error');

  }
  
  protected __get(url, params?) {
    this.appendToken();
    if (params) {
      this.appendParams(params);
    }
    return this.http.get(`${this.apiUrl}/${url}`, this.config).pipe(catchError(err => this.handleError(err)));
  }


  protected __put(url, putBody) {
    this.appendToken();
    return this.http.put(`${this.apiUrl}/${url}`, putBody, this.config).pipe(catchError(err => this.handleError(err)));
  }


  protected __post(url, postBody, hasBlobRes?: boolean) {
    this.appendToken();
    const postConfig = { ...this.config };
    if (hasBlobRes) {
      postConfig.responseType = 'blob' as 'json';
    }
    return this.http.post(`${this.apiUrl}/${url}`, postBody, postConfig).pipe(catchError(err => this.handleError(err)));
  }

  protected __delete(url) {
    this.appendToken();
    return this.http.delete(`${this.apiUrl}/${url}`, this.config).pipe(catchError(err => this.handleError(err)));
  }

}


