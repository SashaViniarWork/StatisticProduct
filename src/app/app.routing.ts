
import { FormRegisterComponent} from './form-register/form-register.component';
import { FormStep1Component} from './personal-info-step-1/form-step-1/form-step-1.component';
import {PersonalInfoStep1Component} from './personal-info-step-1/personal-info-step-1.component';
import { TabsDisciplineComponent} from './tabs-discipline/tabs-discipline.component';
import {TabsProfessionComponent} from './tabs-profession/tabs-profession.component';
import {TabsEviWorkComponent} from './tabs-evi-work/tabs-evi-work.component';
import {TabsLevelComponent} from './tabs-level/tabs-level.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MyProfileComponent} from './my-profile/my-profile.component';


import { LandingComponent } from './landing/landing.component';
import { FormsignupComponent } from './formsignup/formsignup.component';
import {AcademicinfoComponent} from './academicinfo/academicinfo.component';
import {DashboardsaveComponent} from './dashboardsave/dashboardsave.component';
import {SettingComponent} from './setting/setting.component';
import {ResetComponent} from './reset/reset.component';
import {SuccessfullComponent} from './successfull/successfull.component';
import {FaqHeaderLandingComponent} from './faq/faq-header-landing/faq-header-landing.component';
import {FaqHeaderDashComponent} from './faq/faq-header-dash/faq-header-dash.component';
import {PageGrandComponent} from './page-grand/page-grand.component'


export const AppRoutes: any = [
  { path: '', component: LandingComponent },
  { path: 'sign_up', component: FormsignupComponent },
  { path: 'step1', component: PersonalInfoStep1Component },
  { path: 'tabs', component: TabsDisciplineComponent },
  { path: 'tabs_profesion', component: TabsProfessionComponent },
  { path: 'tabs_level', component: TabsLevelComponent },
  { path: 'tabs_style', component: TabsEviWorkComponent },
  { path: 'dash', component:  DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'academic', component: AcademicinfoComponent},
  { path: 'save', component: DashboardsaveComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'reset', component: ResetComponent},
  { path: 'successfull', component: SuccessfullComponent},
  { path: 'faq_landing', component: FaqHeaderLandingComponent},
  { path: 'faq_dash', component: FaqHeaderDashComponent},
  { path: 'grant/:id', component: PageGrandComponent},
];

export const AppComponents: any = [
  LandingComponent,
  FormsignupComponent,
  PersonalInfoStep1Component
];
