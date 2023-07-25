import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe(
      (data) => {
        // Handle successful response
        console.log('got data',data);
      },
      (error) => {
        // Handle error
        console.error('got error',error);
      }
    );
  }
  

}
