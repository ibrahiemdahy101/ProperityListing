import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPropType, AllIpropType,Updt, Site,ICustomer } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class MasterServeService {
  res: AllIpropType = { "message": "", data: [], "result": false };
  constructor(private http: HttpClient) { }
  //ProperityType
  getAllPropType(): Observable<AllIpropType>{
    return this.http.get<AllIpropType>('https://projectapi.gerasim.in/api/PropertyBookingController/GetAllPropertyType')
  }

  addNewPropType(obj:IPropType): Observable<Updt>{
    const newob=[obj]
   return this.http.post<Updt>('https://projectapi.gerasim.in/api/PropertyBookingController/AddPropertyType',newob);
  }
  
 updatPropType(newob:IPropType): Observable<Updt>{
   return this.http.put<Updt>('https://projectapi.gerasim.in/api/PropertyBookingController/UpdatePropertyType',newob)
  }
  
  deletePropType(id:Number): Observable<Updt>{
    return this.http.delete<Updt>(`https://projectapi.gerasim.in/api/PropertyBookingController/DeletePropertyTypeById?id=${id}`)
  }
//Sites
getAllSites(): Observable<any>{
  return this.http.get<any>("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllSites")
}

  addSite(site:Site):Observable<AllIpropType> {
    return this.http.post<AllIpropType>('https://projectapi.gerasim.in/api/PropertyBookingController/GetAllSites',site)
  }

  getSiteById(siteId:Number):Observable<any> {
  return this.http.get<any>(`https://projectapi.gerasim.in/api/PropertyBookingController/getSiteDetails?siteId=${siteId}`)
  }
  
  deletSite(id:Number):Observable<Updt> {
    return this.http.delete<Updt>(`https://projectapi.gerasim.in/api/PropertyBookingController/DeleteSitesById?id=${id}`)
  }

  //Customers
  getAllcustomers():Observable<AllIpropType> {
  return  this.http.get<AllIpropType>('https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer');
  }
  
  addCustomer(customer:ICustomer):Observable<Updt> {
    return this.http.post<Updt>('https://projectapi.gerasim.in/api/PropertyBookingController/AddCustomer',customer)
  }
 getCustomerByid(id:number):Observable<any> {
 return this.http.get<any>(`https://projectapi.gerasim.in/api/PropertyBookingController/GetCustomerById?id=${id}`)
  };

  deletCutomer(id:number):Observable<Updt> {
    return this.http.delete<Updt>(`https://projectapi.gerasim.in/api/PropertyBookingController/DeleteCustomerById?id=${id}`)
  }
  
  updatCustomer(customer:ICustomer):Observable<Updt> {
    return this.http.put<Updt>("https://projectapi.gerasim.in/api/PropertyBookingController/UpdateCustomer",customer)
  }

  //Masters
  getAllMasterProp():Observable<AllIpropType> {
   return this.http.get<AllIpropType>('https://projectapi.gerasim.in/api/PropertyBookingController/GetAllPropertyMasters')
  }

  test():Observable<any> {
  return this.http.get('http://localhost:3000/site')
}
}
