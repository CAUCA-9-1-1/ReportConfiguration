import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { templateCSSPreprocessor } from './template-preprocessor';


@Injectable()
export class TextEditorService {

  private _serverUrl: string ;
  private _loadDataUrl: string;
  private _resetDataUrl: string;
  private _saveDataUrl: string;
  private _pdfDownloadUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://159.203.21.230:5000/';
  }

  public set serverUrl(serverUrl: string) {
    this._serverUrl = serverUrl;
    this._loadDataUrl = this._serverUrl + `load`;
    this._resetDataUrl = this._serverUrl + `reset`;
    this._saveDataUrl = this._serverUrl + `save`;
    this._pdfDownloadUrl = this._serverUrl + `pdf`;
  }

  public getLastSavedTemplate(): Observable<string> {
    return this.http.get<any>(this._loadDataUrl);
  }

  public saveTemplate(template: string): Observable<any> {
      return this.http.post(
        this._saveDataUrl,
        JSON.stringify( templateCSSPreprocessor + template)
      );
  }

  public resetData(): Observable<any> {
    return this.http.get(this._resetDataUrl);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
