import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { GcmserviceService } from './shared/gcmservice.service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { GorakhpurCricketMahotsavComponent } from './gorakhpur-cricket-mahotsav/gorakhpur-cricket-mahotsav.component';
import { HomeComponent } from './home/home.component';
import { BlockLevelCommitteeComponent } from './block-level-committee/block-level-committee.component';
import { AdministrativeCommitteeComponent } from './administrative-committee/administrative-committee.component';
import { TechnicalCommitteeComponent } from './technical-committee/technical-committee.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { UmpireScorerComponent } from './umpire-scorer/umpire-scorer.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { UploadComponent } from './upload/upload.component';
import { DemoComponent } from './demo/demo.component';
// import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
// import { TopheaderComponent } from './admin/topheader/topheader.component';
// import { Admin } from './admin/admin.sidebar/admin.sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavigationComponent,
    FooterComponent,
    SliderComponent,
    IntroComponent,
    GorakhpurCricketMahotsavComponent,
    HomeComponent,
    BlockLevelCommitteeComponent,
    AdministrativeCommitteeComponent,
    TechnicalCommitteeComponent,
    PlayerRegistrationComponent,
    TermsconditionComponent,
    UmpireScorerComponent,
    StaffRegistrationComponent,
    UploadComponent,
    DemoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GcmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
