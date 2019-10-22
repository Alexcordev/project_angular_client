import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddemployeComponent } from './addemploye/addemploye.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateprojectComponent,
    AddprojectComponent,
    AddemployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
