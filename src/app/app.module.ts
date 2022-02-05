import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './Pages/home/home.component';
import { AccederAuTimesheetComponent } from './Pages/acceder-au-timesheet/acceder-au-timesheet.component';
import { RolesComponent } from './Pages/roles/roles.component';
import { ServicesComponent } from './Pages/services/services.component';
import { PersonnesComponent } from './Pages/personnes/personnes.component';
import { TacheComponent } from './Pages/tache/tache.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { ValidationTimeSheetsComponent } from './Pages/validation-time-sheets/validation-time-sheets.component';
import { LoginFormComponent } from './Pages/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    AccederAuTimesheetComponent,
    RolesComponent,
    ServicesComponent,
    PersonnesComponent,
    TacheComponent,
    ProjectsComponent,
    ValidationTimeSheetsComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
