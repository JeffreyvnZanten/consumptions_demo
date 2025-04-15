export type Consumption = {
  name: string;
  type: "eten" | "drinken" | "vape";
  consumed_at: string;
  quantity: number; 
  unit: string; 
}

export type ConsumptionLog = {
  date: Date;
  consumptions: Consumption[];
}