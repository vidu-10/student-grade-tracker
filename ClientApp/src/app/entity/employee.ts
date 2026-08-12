import {Gender} from "./gender";
import {Empstatus} from "./empstatus";
import {Emptype} from "./emptype";


export class Employee{

  public id !: number;
  public fullname !: string;
  public number !: string;
  public callingname !: string;
  public photo !: string;
  public dobirth !: string;
  public nic !: string;
  public address !: string;
  public mobile !: string;
  public land !: string;
  public email !: string;
  public doassignment !: string;
  public gender !: Gender;
  public empstatus !: Empstatus;
  public emptype !: Emptype;


  constructor(id:number, fullname:string, number:string,
              callingname:string, photo:string, dobirth:string,
              nic:string, address:string, mobile:string,
              land:string,email:string, doassignment:string,
              gender:Gender,
              empstatus:Empstatus,
              emptype:Emptype,
              ) {

    this.id=id;
    this.fullname=fullname;
    this.number=number;
    this.callingname=callingname;
    this.photo=photo;
    this.dobirth=dobirth;
    this.nic=nic;
    this.address=address;
    this.mobile=mobile;
    this.land=land;
    this.email=email;
    this.doassignment=doassignment;
    this.gender=gender;
    this.empstatus=empstatus;
    this.emptype=emptype;
  }

}





