import {Employee} from "../entity/employee";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) {  }

  async delete(id: number): Promise<[]|undefined>{
    // @ts-ignore
    return this.http.delete('http://localhost:8080/employees/' + id).toPromise();
  }

  async update(employee: Employee): Promise<[]|undefined>{
    return this.http.put<[]>('http://localhost:8080/employees', employee).toPromise();
  }


  async getAll(query:string): Promise<Array<Employee>> {
    const employees = await this.http.get<Array<Employee>>('http://localhost:8080/employees'+query).toPromise();
    if(employees == undefined){
      return [];
    }
    return employees;
  }

  async getAllList(): Promise<Array<Employee>> {

    const employees = await this.http.get<Array<Employee>>('http://localhost:8080/employees/list').toPromise();
    if(employees == undefined){
      return [];
    }
    return employees;
  }

  async add(employee: Employee): Promise<[]|undefined>{
    return this.http.post<[]>('http://localhost:8080/employees', employee).toPromise();
  }

  // Get employees filtered by functional unit (new call)
  getByFunctionalUnit(functionalunitid: number): Promise<Employee[]> {
    return this.http.get<Employee[]>(
      `http://localhost:8080/employees/list?functionalunitid=${functionalunitid}`
    ).toPromise().then(r => r ?? []);
  }

}


