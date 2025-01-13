import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';

  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      this.theme = savedTheme ? savedTheme : this.theme;
      this.applyTheme();
    }
  }

  setTheme(theme: string) {
    this.theme = theme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(this.theme);
  }

  private applyTheme() {
    document.body.setAttribute('data-bs-theme', this.theme);
  }

  getTheme() {
    return this.theme;
  }
}
