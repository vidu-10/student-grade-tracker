import {CountByDesignation} from "./entity/countbydesignation";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CountByStationStatus} from "./entity/countbystationstatus";
import {Countbycomplaintstatus} from "./entity/countbycomplaintstatus";
import {Countbycomplaintassignmentstatus} from "./entity/countbycomplaintassignmentstatus";
import {Countbycomplaintstatuschart} from "./entity/countbycomplaintstatuschart";
import {Complaintanalysisbymonth} from "./entity/complaintanalysisbymonth";
import {Investigationsbystatus} from "./entity/investigationsbystatus";
import {Officersbyfunctionalunit} from "./entity/officersbyfunctionalunit";
import {Countbycomplainttypeandmonths} from "./entity/countbycomplainttypeandmonths";

@Injectable({
  providedIn: 'root'
})

export class ReportService {

  constructor(private http: HttpClient) {  }

  async countByDesignation(): Promise<Array<CountByDesignation>> {

    const countbydesignations = await this.http.get<Array<CountByDesignation>>('http://localhost:8080/reports/countbydesignation').toPromise();
    if(countbydesignations == undefined){
      return [];
    }
    return countbydesignations;
  }

  async countbystationstatus(): Promise<Array<CountByStationStatus>> {

    const countbystationstatuses = await this.http.get<Array<CountByStationStatus>>('http://localhost:8080/reports/countbystationstatus').toPromise();
    if(countbystationstatuses == undefined){
      return [];
    }
    return countbystationstatuses;
  }

  async countbycomplaintstatus(): Promise<Array<Countbycomplaintstatus>> {

    const countbystationstatuses = await this.http.get<Array<Countbycomplaintstatus>>('http://localhost:8080/reports/countbycomplaintstatus').toPromise();
    if(countbystationstatuses == undefined){
      return [];
    }
    return countbystationstatuses;
  }

  async countbycomplaintassignmentstatus(): Promise<Array<Countbycomplaintassignmentstatus>> {

    const countbycomplaintassignmentstatuses = await this.http.get<Array<Countbycomplaintassignmentstatus>>('http://localhost:8080/reports/countbycomplaintassignmentstatus').toPromise();
    if(countbycomplaintassignmentstatuses == undefined){
      return [];
    }
    return countbycomplaintassignmentstatuses;
  }

  async countByComplaintStatusChart(): Promise<Array<Countbycomplaintstatuschart>> {

    const countbycomplaintstatuscharts = await this.http.get<Array<Countbycomplaintstatuschart>>('http://localhost:8080/reports/countbycomplaintstatus2').toPromise();
    if(countbycomplaintstatuscharts == undefined){
      return [];
    }
    return countbycomplaintstatuscharts;
  }

  async complaintAnalysisByMonth(): Promise<Array<Complaintanalysisbymonth>> {

    const complaintanalysisbymonths = await this.http.get<Array<Complaintanalysisbymonth>>('http://localhost:8080/reports/complaintanalysisbymonths').toPromise();
    if(complaintanalysisbymonths == undefined){
      return [];
    }
    return complaintanalysisbymonths;
  }

  async investigationsByStatus(): Promise<Array<Investigationsbystatus>> {

    const investigationsbystatuses = await this.http.get<Array<Investigationsbystatus>>('http://localhost:8080/reports/investigationsbystatuses').toPromise();
    if(investigationsbystatuses == undefined){
      return [];
    }
    return investigationsbystatuses;
  }

  async officersByFunctionalUnit(): Promise<Array<Officersbyfunctionalunit>> {

    const officersbyfunctionalunits = await this.http.get<Array<Officersbyfunctionalunit>>('http://localhost:8080/reports/officersbyfunctionalunits').toPromise();
    if(officersbyfunctionalunits == undefined){
      return [];
    }
    return officersbyfunctionalunits;
  }

  async countbycomplainttypeandmonths(): Promise<Array<Countbycomplainttypeandmonths>> {

    const countbycomplainttypeandmonths = await this.http.get<Array<Countbycomplainttypeandmonths>>('http://localhost:8080/reports/countbycomplainttypeandmonths').toPromise();
    if(countbycomplainttypeandmonths == undefined){
      return [];
    }
    return countbycomplainttypeandmonths;
  }

}


