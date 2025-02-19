import { Component, inject, OnInit, ViewChild } from '@angular/core' // Asegúrate de importar el servicio

//* PrimeNG
import { DatePickerModule, LocaleSettings } from 'primeng/datepicker';
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

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Electricity } from '../../../../interfaces/electricity';
import { ElectricityGeneralService } from '../../../../services/electricity/electricity-general.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stat } from 'node:fs';
import { FormatDateService } from '../../../../services/format-date.service';

registerLocaleData(localeEs);

@Component({
  selector: 'app-electricity-general',
  imports: [DatePickerModule, TableModule, ButtonModule, IconField, IconFieldModule, InputIcon,
    CommonModule, MultiSelectModule, InputTextModule, DropdownModule, FluidModule, FormsModule],
  templateUrl: './electricity-general.component.html',
  styleUrl: './electricity-general.component.css'
})
export class ElectricityGeneralComponent implements OnInit {

  @ViewChild('ElectricityGeneral') table!: Table;

  private _electricityService: ElectricityGeneralService = inject(ElectricityGeneralService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _formatDate: FormatDateService = inject(FormatDateService)

  loading: boolean = false;
  listElectricity: Electricity[] = [];
  searchValue: string | undefined;

  InitDate: string = '';
  FinalDate: string = '';

  startDate?: Date;
  formattedStartDate: string = '';
  endDate?: Date;
  formattedEndDate: string = '';

  filteredElectricity: any[] = [];

  urlInput: string = '';

  isOffcanvasOpen = false;

  ngOnInit(): void {
    this.InitDate = this._activatedRoute.snapshot.paramMap.get('InitDate')!;
    this.FinalDate = this._activatedRoute.snapshot.paramMap.get('FinalDate')!;

    this.getAllElectricity(this.InitDate, this.FinalDate);

  }

  getAllElectricity(InitDate: string, FinalDate: string): void {
    this.loading = true;
    this._electricityService.getAllElectricity(InitDate, FinalDate).subscribe((data: Electricity[]) => {
      this.listElectricity = data;
      this.loading = false;
    });
  }

  onDateChange() {
    if (this.startDate && this.endDate) {
      this.formattedStartDate = this._formatDate.formatDate(this.startDate);
      this.formattedEndDate = this._formatDate.formatDate(this.endDate);

      const newUrl = `electricityGeneral/${this.formattedStartDate}/${this.formattedEndDate}`;
      this._router.navigateByUrl(newUrl);
      this.getAllElectricity(this.formattedStartDate, this.formattedEndDate);
    } else {
      console.log('Fechas no definidas:', this.startDate, this.endDate);
    }
  }

  // formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses de 0-11
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}-${month}-${day}`; // Formato yy-mm-dd
  // }

  // exportToPDF() {
  //   const doc = new jsPDF('l', 'pt');
  //   const columns = [
  //     { header: 'Fecha', dataKey: 'Fecha' },
  //     { header: 'Plan diario', dataKey: 'PlanDiario' },
  //     { header: 'Consumo', dataKey: 'Conumo' },
  //   ];

  //   const rows = this.listElectricityConsumption.map(electricityConsumption => ({
  //     Fecha: electricityConsumption.Fecha,
  //     'Plan diario': electricityConsumption.PlanDiario,
  //     Consumo: electricityConsumption.Consumo,

  //   }));

  //   console.log(rows);

  //   autoTable(doc, {
  //     columns,
  //     body: rows,
  //   });

  //   doc.save('Consumo de electricidad de TAXISCUBA.pdf');
  // }

  // exportToExcel() {
  //   // Mapeo de las propiedades que deseas exportar
  //   const rows = this.listElectricityConsumption.map(electricityConsumption => ({
  //     Fecha: electricityConsumption.Fecha,
  //     'Plan diario': electricityConsumption.PlanDiario,
  //     Consumo: electricityConsumption.Consumo,
  //   }));

  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows); // Usar el mapeo
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');
  //   XLSX.writeFile(wb, 'Consumo de electricidad de TAXISCUBA.xlsx');
  // }

  clear() {
    this.table.clear();
    this.table.reset();
    this.searchValue = '';
    // window.location.reload();
  }


}
