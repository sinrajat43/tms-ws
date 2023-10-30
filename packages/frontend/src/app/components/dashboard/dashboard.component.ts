import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTripComponent } from '../add-trip/add-trip.component';

export interface Trip {
  source: string;
  destination: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  displayedColumns: string[] = ['source','destination'];
  diss: any
  dataSource:any;

  constructor(private httpService: HttpService,public dialog: MatDialog) {}

  ngOnInit(): void {

    this.getTripList();

    this.httpService.getData().subscribe({
      next: (data) => {
        // Handle successful response
        this.diss=data.value
      },
      error: (error) => {
        // Handle error
        console.error('got error', error);
      }
    });
  }
  
  openPopupForm(): void {
    const dialogRef = this.dialog.open(AddTripComponent);

    // Optional: Subscribe to the afterClosed event to perform actions after the popup is closed
    dialogRef.afterClosed().subscribe(result => {
      this.getTripList();
      // Additional logic as needed
    });
  }

  getTripList(){
    this.httpService.getTripList().subscribe({
      next:(trips)=>{
        this.dataSource =trips
      },
      error:(error)=>{
        console.error('got error while getting trips', error);
      }
    })
  }

}
