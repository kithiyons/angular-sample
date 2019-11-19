import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService) { }
    private errorMsg: string;

  ngOnInit() {
   
    // 
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // this.authenticationService.getUser().subscribe(data => {console.log(data)});
  }

    login(data) {
      let userName = data.form.value.username;
      let password = data.form.value.password;
      this.authenticationService.getUser(userName, password).subscribe((res) => { this.validateUser(res, userName, password) }
      );
    }

    private validateUser(data, userName, password) {
      let user = data.filter((key) => {
        return (key.username == userName && key.password == password);
      });
      if(user.length) {
        sessionStorage.setItem('userInfo',data[0].first_name);
        this.userService.setUserName(data[0].first_name);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg = 'Incorrect Email id or Password';
      }
    }
}
