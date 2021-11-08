import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessInsightComponent } from './components/business-insight/business-insight.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MemberComponent } from './components/member/member.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'business-insight',
    component: BusinessInsightComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
