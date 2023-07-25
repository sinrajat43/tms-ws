import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//  import { environment } from '../environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

const socketConfig: SocketIoConfig = {
  url: 'http://localhost:3000',
  //  environment.socketUrl, // replace with the backend socket URL
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, SocketIoModule.forRoot(socketConfig),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
