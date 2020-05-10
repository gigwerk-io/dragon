import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../utils/interfaces/storage/constants';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../utils/services/authentication.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  showDropdown = false;
  image: string;
  name: string;
  userId: number;
  constructor(private storage: Storage, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.storage.get(StorageKeys.PROFILE).then((profile) => {
      this.userId = profile.user_id;
      this.image = profile.image;
      this.name = profile.user.first_name + ' ' + profile.user.last_name;
    });
  }

  onLogout() {
    this.storage.get(StorageKeys.ACCESS_TOKEN).then(token => {
      const headers = {
        headers: {
          Authorization: token
        }
      };
      this.auth.logout(headers).subscribe(res => {
        this.router.navigateByUrl('/login');
      });
    });
  }
}
