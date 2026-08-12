import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NotificationModel} from "../entity/notification";

@Injectable({
  providedIn: 'root'
})

export class Notificationservice {

  constructor(private http: HttpClient) {  }

  async delete(id: number): Promise<[]|undefined>{
    // @ts-ignore
    return this.http.delete('http://localhost:8080/notifications/' + id).toPromise();
  }

  async update(notificationModel: NotificationModel): Promise<[]|undefined>{
    return this.http.put<[]>('http://localhost:8080/notifications', notificationModel).toPromise();
  }


  async getAll(query:string): Promise<Array<NotificationModel>> {
    const notifications = await this.http.get<Array<NotificationModel>>('http://localhost:8080/notifications'+query).toPromise();
    if(notifications == undefined){
      return [];
    }
    return notifications;
  }


}


