import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativeCommitteeComponent } from './administrative-committee/administrative-committee.component';
import { AppComponent } from './app.component';
import { BlockLevelCommitteeComponent } from './block-level-committee/block-level-committee.component';
import { GorakhpurCricketMahotsavComponent } from './gorakhpur-cricket-mahotsav/gorakhpur-cricket-mahotsav.component';
import { HomeComponent } from './home/home.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { TechnicalCommitteeComponent } from './technical-committee/technical-committee.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { UmpireScorerComponent } from './umpire-scorer/umpire-scorer.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
 
  {
    path:'gorakhpur-cricket-mahotsav',
    component:GorakhpurCricketMahotsavComponent
  },
  {
    path:'block-level-committee',
    component:BlockLevelCommitteeComponent
  },
  {
    path:'administrative-committee',
    component:AdministrativeCommitteeComponent
  },
  {
    path:'technical-committee',
    component:TechnicalCommitteeComponent
  },
  {
    path:'player-registration',
    component:PlayerRegistrationComponent
  },
  {
    path:'termscondition',
    component:TermsconditionComponent
  },
  {
    path:'umpire-scorer',
    component:UmpireScorerComponent
  },
  {
    path:'staff-registration',
    component:StaffRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
