import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public theme_Service = inject(ThemeService);

  toggleTheme() {
    this.theme_Service.toggleTheme();
  }

  get currentTheme() {
    return this.theme_Service.getTheme();
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
}
}
