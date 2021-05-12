import { User } from "./User";

export class Anunt{
    id:number;
    dateAdded:Date;
    description:string;
    title:string;
    city:string;
    species:string;
    county:string;
    phoneNumber:string;
    image:string;
    user:User;
    anuntId:string;
    
}