import {Component, OnInit} from '@angular/core';
import {AuthorizationManager} from "../../service/authorizationmanager";
import {Router} from "@angular/router";
import {UserService} from "../../service/userservice";
import {User} from "../../entity/user";
import {EmployeeService} from "../../service/employeeservice";
import {Moduleservice} from "../../service/moduleservice";
import {Employee} from "../../entity/employee";
import {Module} from "../../entity/module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


}
