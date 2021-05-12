import { Anunt } from "./Anunt";

export class User{
    id:number;
    email:string;
    firstName:string;
    lastName:string;
    password:string;
    role:string;
    authorities:[];
    isNonLocked:boolean;
    isActive:boolean;
    anunturi:Anunt[];
    
}