import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {

  sidebarVisible = signal(true);

  toggleSidebar() {
    this.sidebarVisible.update(value => !value);
  }
}
