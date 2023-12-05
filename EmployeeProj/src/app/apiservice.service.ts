import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from 'Models/employee';
import { Employees } from 'Models/employees';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { TravelRequest } from 'Models/TravelRequest';
import { TravelRequests } from 'Models/TravelRequests';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  
  readonly apiUrl='https://localhost:44348/api/';

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this.http.get<any[]>(this.apiUrl + 'Employee').pipe(
      map((Response:any)=>Response.$values as Employee[])
    );
  }
  getDetailEmployee(id:number):Observable<Employee>{
    return this.http.get<any>(this.apiUrl + 'Employee/' +id)
    ;
  }
  addemp(newEmp: Employee):Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl +'Employee',newEmp)
  }
  editemp(id:number,newEmp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl + 'Employee/' +id,newEmp)
  }
  deleteemp(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.apiUrl+'Employee/'+id);
  }
  getTravelRequest():Observable<TravelRequest[]>{
    return this.http.get<any[]>(this.apiUrl + 'Travel').pipe(
      map((Response:any)=>Response.$values as TravelRequest[])
    );
  }
  getDetailTravelRequest(id:number):Observable<TravelRequest>{
    return this.http.get<any>(this.apiUrl + 'Travel/' +id)
    ;
  }
  addtravel(newTravel: TravelRequest):Observable<TravelRequest> {
    return this.http.post<TravelRequest>(this.apiUrl +'Travel',newTravel)
  }
  edittravel(id:number,newTravel:TravelRequest):Observable<TravelRequest>{
    return this.http.put<TravelRequest>(this.apiUrl + 'Travel/' +id,newTravel)
  }
  deletetravel(id:number):Observable<TravelRequest>{
    return this.http.delete<TravelRequest>(this.apiUrl+'Travel/'+id);
  }
  //Edit Genre
  approveTravelrequest(id:number,newTravelrequest:TravelRequest):Observable<TravelRequest>
  {
    return this.http.put<TravelRequest>(this.apiUrl + 'Travel/approve/'+id,newTravelrequest)
  }

  //Edit Genre
  bookTravelrequest(id:number,newTravelrequest:TravelRequest):Observable<TravelRequest>
  {
    return this.http.put<TravelRequest>(this.apiUrl + 'Travel/book/'+id,newTravelrequest)
  }


}
