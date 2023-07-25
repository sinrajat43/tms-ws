import { BrowserModule } from '@angular/platform-browser';
     import { NgModule } from '@angular/core';
     import { AppComponent } from './app.component';
    //  import { environment } from '../environments/environment';

     import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'; // install this package using npm or yarn

     const socketConfig: SocketIoConfig = {
       url: 'http://localhost:3000',
      //  environment.socketUrl, // replace with the backend socket URL
       options: {},
     };

     @NgModule({
       declarations: [AppComponent],
       imports: [
         BrowserModule,
         SocketIoModule.forRoot(socketConfig),
       ],
       providers: [],
       bootstrap: [AppComponent]
     })
     export class AppModule {}