import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from "./register-user/register-user.component";
import { VerifyOtpComponent } from "./verify-otp/verify-otp.component";
import { PhoneNumberPage } from './phone-number.page';
const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent
  },
 
  {
    path: 'otp',
    component: VerifyOtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneNumberPageRoutingModule { }
