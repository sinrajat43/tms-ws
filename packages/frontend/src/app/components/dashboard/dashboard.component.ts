import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  diss: any

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe({
      next: (data) => {
        // Handle successful response
        this.diss=data.value
        console.log('got data', data);
      },
      error: (error) => {
        // Handle error
        console.error('got error', error);
      }
    });
  }
  
  

}
