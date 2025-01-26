export interface Electricity {
  Provincia?: string,
  PlanDiario: number,
  RealDia: number,
  PlanPicoNocturno: number,
  RealDiaPicoNoct: number,
  RealDiaAcum: number,
  PerdidasDia: number,
  PerdidasAcum: number,
}
