import { Data } from "@angular/router";

export interface IPropType{
    "propertTypeId":Number,
     "propertyType":string
}

export interface AllIpropType{
    "message": string,
  "result": boolean,
  "data": []
}

export interface Updt{
  "message": string,
  "result": string,
  "data": string
}

export class Site{
  siteId: Number;
  siteTitle: string;
  location: string;
  propertyTypeId: Number;
  city: string;
  pincode: string;
  state: string;
  totalProperties: number;
  createdDate: Date;
  lastUpdatedDate:Date;

  constructor() {
    this.siteId=0;
    this.siteTitle=''
    this.location= '';
    this.propertyTypeId=0;
    this.city=''
    this.pincode = '';
    this.state= "";
    this.totalProperties=0;
    this.createdDate =new Date();
   this.lastUpdatedDate=new Date();
  }
}

export interface ICustomer{
      "custId": number,
      "name":string,
      "mobile": string,
      "emailid": string,
      "address": string
}

export interface IMasterProp{
  "propertyId": number,
  "propertyNo": number,
  "facing": string,
  "totalArea": string,
  "rate": number,
  "siteId": number,
  "siteTitle": string,
  "location": string,
  "propertyTypeId": number,
  "city": string,
  "pincode": string,
  "state": string,
  "totalProperties": number,
  "createdDate": string,
  "lastUpdatedDate": string
}