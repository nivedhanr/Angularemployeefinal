import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import { AdminComponent } from './admin/admin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    EmployeeComponent,
    EmpregisterComponent,
    AdminComponent,
    AddcourseComponent,
    AddfriendComponent,
    ViewcourseComponent,
    ViewfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
