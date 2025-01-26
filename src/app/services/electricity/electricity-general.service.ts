import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electricity } from '../../interfaces/electricity';

@Injectable({
  providedIn: 'root'
})
export class ElectricityGeneralService {

  private urlBase: string;

  private _http: HttpClient = inject(HttpClient);

  constructor() {

    this.urlBase = 'http://localhost:3220/electricidadgeneral';

  }

  getAllElectricity(IniDate: string, FinalDate: string): Observable<Electricity[]> {
    return this._http.get<Electricity[]>(`${this.urlBase}/${IniDate}/${FinalDate}`);
  }
}
