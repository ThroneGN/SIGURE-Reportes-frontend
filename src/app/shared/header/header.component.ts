import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public theme_Service = inject(ThemeService);

  public InitDate: string;
  public FinalDate: string;

  constructor() {
    const today = new Date();
    this.InitDate = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
    this.FinalDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    // console.log(`InitDate: ${this.InitDate}`)
    // console.log(`FinalDate: ${this.FinalDate}`);
  }

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
