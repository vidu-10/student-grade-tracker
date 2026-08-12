import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationManager} from "../../service/authorizationmanager";
import {DarkModeService} from "../../service/DarkModeService";
import {Notificationservice} from "../../service/notificationservice";
import {NotificationModel} from "../../entity/notification";

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent implements OnInit{

  // notifications: NotificationModel[] = [];
  // notificationCount: number = 0;
  // showNotifications: boolean = false;

  opened: boolean = true;

  menuGroup: any[] = [];

  role: string = '';

  // Set Mat icons you need to add to Menus
  matIcons : any = {
    'Reports': "insights",
    'Admin': 'person',

    // "assignment"
    //"assignment_ind"
// "inventory" "description", "balance", "people"
  };

  userImage: string = 'assets/default.png'
  constructor(
    private router: Router,
    public authService: AuthorizationManager,
    public darkModeSevice:DarkModeService,
    private ns: Notificationservice
  ) {
  }

  logout(): void {
    this.router.navigateByUrl("login")
    this.authService.clearUsername();
    this.authService.clearMenuState();
    localStorage.removeItem("Authorization");
    localStorage.removeItem("employee");
  }

  // Check that the logged user has the permission to view and then set Visible menu or else set not-visible menu
  isMenuVisible(category: string): boolean {
    let isVisible = true;

    this.menuGroup.forEach((menuGroup: { Menu: string; MenuItems: { name: string; isVisible: boolean }[] }) => {

      if (menuGroup.Menu === category) {
        isVisible = menuGroup.MenuItems.some(menuItem => menuItem.isVisible);
      }
    });

    return isVisible;
  }

  async ngOnInit(): Promise<void> {
    this.menuGroup = this.authService.getNavListItem();
    await this.authService.getAuth(this.authService.getUsername());
    this.userImage = this.authService.getUserProfile();

    // this.loadNotifications();
  }

  getInitials(): string {
    const name = this.authService.getUsername();
    return name ? name.substring(0, 2).toUpperCase() : 'AD';
  }

  //
  // toggleNotifications(): void {
  //   this.showNotifications = !this.showNotifications;
  // }
  //
  // loadNotifications(): void {
  //   this.ns.getAll("?role=" + this.role + "&isread=false")
  //     .then((data: NotificationModel[]) => {
  //       this.notifications = data;
  //       this.notificationCount = data.length;
  //     });
  // }
  //
  // markAsRead(notification: NotificationModel): void {
  //   notification.isread = true;
  //   this.ns.update(notification).then(() => {
  //     this.loadNotifications();
  //   });
  // }
  //
  // markAllAsRead(): void {
  //   const updates = this.notifications.map(n => {
  //     n.isread = true;
  //     return this.ns.update(n);
  //   });
  //   Promise.all(updates).then(() => {
  //     this.notifications = [];
  //     this.notificationCount = 0;
  //     this.showNotifications = false;
  //   });
  // }
  //
  // getNotifIcon(type: string): string {
  //   const icons: any = {
  //     'complaint':   'description',
  //     'analysis':    'analytics',
  //     'assignment':  'assignment_ind',
  //     'investigation': 'search',
  //     'evidence':    'folder',
  //     'accused':     'person_off',
  //     'arrest':      'security',
  //     'bail':        'lock_open',
  //     'court':       'gavel',
  //     'mediation':   'handshake'
  //   };
  //   return icons[type] || 'notifications';
  // }


}
