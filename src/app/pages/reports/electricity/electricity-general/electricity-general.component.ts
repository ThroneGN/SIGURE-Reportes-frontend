import { Component, OnInit, ViewChild } from '@angular/core' // Asegúrate de importar el servicio

//* PrimeNG
import { DatePickerModule } from 'primeng/datepicker';
import { Table, TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { Slider } from 'primeng/slider';
import { ProgressBar } from 'primeng/progressbar';
import { FluidModule } from 'primeng/fluid';


@Component({
  selector: 'app-electricity-general',
  imports: [DatePickerModule, TableModule, Tag, ButtonModule, IconField, IconFieldModule, InputIcon,
    CommonModule, MultiSelectModule, InputTextModule, DropdownModule, Slider, ProgressBar, FluidModule],
  templateUrl: './electricity-general.component.html',
  styleUrl: './electricity-general.component.css'
})
export class ElectricityGeneralComponent implements OnInit {

  // @ViewChild('dt') dt!: Table;

  loading: boolean = true;

  searchValue: string | undefined;

  exportColumns!: [];

  ngOnInit(): void {
  }



}
