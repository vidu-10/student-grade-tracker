export class NotificationModel {

  public id !: number;
  public message !: string;
  public type !: string;
  public isread !: boolean;
  public createdat !: string;
  public role !: string;

  constructor(id: number, message: string, type: string,
              isread: boolean, createdat: string, role: string) {
    this.id = id;
    this.message = message;
    this.type = type;
    this.isread = isread;
    this.createdat = createdat;
    this.role = role;
  }
}
