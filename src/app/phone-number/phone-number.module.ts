import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterUserComponent } from "./register-user/register-user.component";
import { VerifyOtpComponent } from "./verify-otp/verify-otp.component";
import { IonicModule } from '@ionic/angular';
import { PhoneNumberPageRoutingModule } from './phone-number-routing.module';
import { PhoneNumberPage } from './phone-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PhoneNumberPageRoutingModule
  ],
  declarations: [PhoneNumberPage, RegisterUserComponent, VerifyOtpComponent]
})
export class PhoneNumberPageModule { }
