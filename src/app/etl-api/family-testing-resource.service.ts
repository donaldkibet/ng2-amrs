import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyTestingService {
  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) {}

  public get url(): string {
    return this.appSettingsService.getEtlRestbaseurl().trim();
  }

  public getFamilyTestingReportDate(patientId: string): Observable<any> {
    return this.http
      .get(`${this.url}patient-family-history?patientId=${patientId}`)
      .pipe(
        catchError((err: any) => {
          const error: any = err;
          const errorObj = {
            error: error.status,
            message: error.statusText
          };
          return Observable.of(errorObj);
        }),
        map((response: any) => {
          return response;
        })
      );
  }

  public getFamilyTreePatientList(locationUuid: string): Observable<any> {
    return this.http
      .get(
        `${this.url}family-history-patient-list?locationUuid=${locationUuid}`
      )
      .pipe(
        catchError((err: any) => {
          const error: any = err;
          const errorObj = {
            error: error.status,
            message: error.statusText
          };
          return Observable.of(errorObj);
        }),
        map((response: any) => {
          return response;
        })
      );
  }
}
