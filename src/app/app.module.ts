import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule,
   NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import{FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FormscontrolComponent } from './formscontrol/formscontrol.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatCardModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    SidenavListComponent,
    FormscontrolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatNativeDateModule, MatIconModule,
    MatListModule, MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,  
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'form', component: FormscontrolComponent}
    ])
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCardModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
