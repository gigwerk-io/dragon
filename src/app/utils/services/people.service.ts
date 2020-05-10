import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { PendingInvitationsResponse, SingleUserResponse, User, UsersResponse } from '../interfaces/user/User';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/storage/constants';
import { ToastrService } from 'ngx-toastr';
import { Response } from '../interfaces/api/GenericResponse';


@Injectable({
  providedIn: 'root'
})
export class PeopleService extends RESTService {

  constructor(
    public http: HttpClient,
    public storage: Storage,
    private toast: ToastrService, ) {
    super(http, storage);
  }

  getAllUsers(): Promise<Response<User[]>> {
    return this.makeHttpRequest(`users`, 'GET')
      .toPromise()
      .then((res: Observable<Response<User[]>>) => {
        return res.toPromise().then(usersRes => usersRes);
      });
  }

  getAllFreelancers(): Promise<User[]> {
    return this.getAllUsers().then(allUsers => allUsers.data.filter(user => user.role === Role.VERIFIED_FREELANCER));
  }

  getAllCustomers(): Promise<User[]> {
    return this.getAllUsers().then(allUsers => allUsers.data.filter(user => user.role === Role.CUSTOMER));
  }

  getAllPendingFreelancers(): Promise<User[]> {
    return this.getAllUsers().then(allUsers => allUsers.data.filter(user => user.role === Role.CUSTOMER));
  }

  getSingleUser(id: number): Promise<Response<User>> {
    return this.makeHttpRequest(`user/${id}`, 'GET')
      .toPromise()
      .then((res: Observable<Response<User>>) => {
        return res.toPromise().then((r: Response<User>) => r);
      });
  }

  createUser(body: { first_name: string; last_name: string; username: string; email: string; password: string; role: string; })
    : Promise<any> {
    return this.makeHttpRequest(`register`, 'POST', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  updateUser(id: number, body: { role: string; description: string; email: string; }): Promise<any> {
    return this.makeHttpRequest(`user/${id}`, 'PUT', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  deleteUser(id: number): Promise<any> {
    return this.makeHttpRequest(`user/${id}`, 'DELETE')
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  inviteUsers(file: File): Promise<any> {
    return this.makeHttpRequest(`invite`, 'POST', file)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  getPendingInvites(): Promise<PendingInvitationsResponse> {
    return this.makeHttpRequest(`invitations`, 'GET')
      .toPromise()
      .then((res: Observable<PendingInvitationsResponse>) => res.toPromise());
  }

  resetPassword(id: number, body: { id: number; user_id: number; }): Promise<any> {
    return this.makeHttpRequest(`password-reset/${id}`, 'POST', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }


  getInvitations(): Promise<Response<User[]>> {
    return this.makeHttpRequest(`invitations`, 'GET')
      .toPromise()
      .then((res) => res.toPromise());
  }

  deleteOrResendInvite(id: number, type: string): void {
    const message = type === 'POST' ? 'Invitation Sent' : 'Invitation Deleted';

    // type: POST | DELETE
    this.makeHttpRequest(`invitation/${id}`, type)
      .toPromise()
      .then(() => {
        this.toast.success(message);
      }).catch(() => this.toast.error('Something went wrong'));
  }



}
