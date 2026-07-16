import type { UserFormInterface } from "./userForm";

export interface FinalBudget {
id: string
client: UserFormInterface
services: {
    title: string;
    pages?: number;     
    languages?: number;  
  }[];
  totalPrice: number;    
  date: Date;
}