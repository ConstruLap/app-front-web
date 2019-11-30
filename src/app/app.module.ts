import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashComponent } from '../pages/dash/dash.component';
import { CursoComponent } from '../pages/curso/curso.component';

import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    CursoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdzrJwBsQyi5VK05OBlB1ql_eY2JMUuzA',
      libraries: ['visualization'],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
