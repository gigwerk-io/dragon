import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../utils/interfaces/enum/constants';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../utils/services/authentication.service';
import {User} from '../../utils/interfaces/models/User';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  showDropdown = false;
  image: string;
  name: string;
  email: string;
  userId: number;
  constructor(private storage: Storage, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.storage.get(StorageKeys.USER).then((user: User) => {
      this.userId = user.id;
      this.image = user.profile.image;
      this.name = user.first_name + ' ' + user.last_name;
      this.email = user.email;
    });
  }

  onLogout() {
    this.auth.logout().then(res => {
      console.log(res);
      this.router.navigateByUrl('/login');
    });
  }
}
