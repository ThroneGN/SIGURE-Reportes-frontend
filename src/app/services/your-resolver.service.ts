import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getPrerenderParams } from '../app.routes.server';

@Injectable({
  providedIn: 'root'
})
export class YourResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const { InitDate, FinalDate } = getPrerenderParams(route);

    // Aquí puedes realizar cualquier lógica adicional, como llamar a un servicio
    // para obtener datos basados en las fechas.

    return of({ InitDate, FinalDate });
  }
}
