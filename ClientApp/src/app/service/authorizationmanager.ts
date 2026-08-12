import { Injectable } from '@angular/core';
import {UserService} from "./userservice";
import {jwtDecode} from "jwt-decode";

@Injectable()
export class AuthorizationManager {

  public imageempurl!: string;

  private readonly localStorageUsreName = 'username';
  private readonly localStorageAdminMenus = 'admMenuState';
  private readonly localStorageInventoryMenus = 'invMenuState';

  Reports = [

  ];

  Admin = [
    { name: 'User', isVisible: false, routerLink: 'user' },
    { name: 'Privilege', isVisible: false, routerLink: 'privilege' },
    { name: 'Operation', isVisible: false, routerLink: 'operation' },
  ];


  getNavListItem(){
    return [
      { Menu : 'Reports' , MenuItems : this.Reports },
      { Menu : 'Admin' , MenuItems : this.Admin },
    ]
  }

  constructor(
    private us:UserService
  ) {
  }

  enableMenus(modules: { module: string; operation: string }[]): void {
    // console.log('Modules received:', modules);
    const menus = this.getNavListItem();

    menus.forEach(menuGroup => {
      menuGroup.MenuItems.forEach(menuItem => {
        menuItem.isVisible = modules.some(module =>
          module.module.toLowerCase() === menuItem.routerLink.toLowerCase()
        );
        // console.log(menuItem.routerLink, menuItem.isVisible);
      });
    });

    menus.forEach(menuGroup => {
      // @ts-ignore
      localStorage.setItem(this["localStorage" + menuGroup.Menu + "Menus"], JSON.stringify(menuGroup));
    });

  }

  async getAuth(username: string): Promise<void> {

    if (!username) {
      return;
    }

    this.setUsername(username);

    try {
      const authoritiesArray = this.getAuthorities();
      const employee = await this.us.getEmployeeByUserName(username);


      this.setEmployee(employee);
      this.setUserProfile();

      if (authoritiesArray !== undefined && Array.isArray(authoritiesArray)) {
        const authorities = this.extractAuthorities(authoritiesArray);
        // console.log("Here"+ authorities)
        this.enableMenus(authorities);
      }
      else {
        console.log('Authorities are undefined or not an array');
      }

    } catch (error) {
      console.error(error);
    }
  }

  extractAuthorities(authoritiesArray: string[]): { module: string; operation: string }[] {
    return authoritiesArray.map(authority => {
      const [module, operation] = authority.split('-');
      return { module, operation };
    });
  }

  // extractAuthorities(authoritiesArray: string[]): { module: string; operation: string }[] {
  //   return authoritiesArray.map(authority => {
  //     const [module, operation] = authority.split('-');
  //     return { module: module.toLowerCase(), operation: operation.toLowerCase() };
  //   });
  // }

  getUsername(): string {
    return localStorage.getItem(this.localStorageUsreName) || '';
  }

  setUsername(value: string): void {
    localStorage.setItem(this.localStorageUsreName, value);
  }

  setEmployee(employee: any): void {
    localStorage.setItem('employee', JSON.stringify(employee));
  }

  setUserProfile(): void {
    const employee = localStorage.getItem('employee');
    if (employee) {
      try {
        const img = JSON.parse(employee).photo;
        this.imageempurl = atob(img);
      } catch (error) {
        //console.error("Error decoding employee photo:", error);
        this.imageempurl = "assets/default.png";
      }
    }
  }

  getAuthorities(){
    const authHeader = localStorage.getItem("Authorization");
    if (!authHeader) {
      return [];
    }
    // @ts-ignore
    const jwtToken = authHeader.split(' ')[1];
    return jwtDecode(jwtToken).aud;
  }

  getUserProfile(): string {
    return this.imageempurl;
  }

  initializeMenuState(): void {

    const menus = this.getNavListItem();

    menus.forEach(menuState => {
      // @ts-ignore
      const localStorageState = localStorage.getItem(this['localStorage' + menuState.Menu + 'Menus']);
      if (localStorageState) {
        menuState.Menu = JSON.parse(localStorageState);
      }
    });
  }

  clearUsername(): void {
    localStorage.removeItem(this.localStorageUsreName);
  }

  clearMenuState(): void {
    const menus = this.getNavListItem();
    menus.forEach(menu => {
      // @ts-ignore
      localStorage.removeItem(this['localStorage' + menu.Menu + 'Menus']);
    });
  }


}
