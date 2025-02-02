import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDateService {

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses de 0-11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Formato yy-mm-dd
  }
}
