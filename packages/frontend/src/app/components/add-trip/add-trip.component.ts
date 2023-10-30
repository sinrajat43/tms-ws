import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';



@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html'
})
export class AddTripComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTripComponent>,
    private httpService: HttpService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        // Define your form inputs and their validation rules here
        // Example:
        source: ['', Validators.required],
        destination: ['', [Validators.required]],
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.httpService.addTrip(formData).subscribe(
        response => {
          // Log the response from the API call
          // Optional: Perform additional actions with the response data
          
          this.close();
        },
        error => {
          // Handle any errors that occur during the API call
          console.error('API call failed:', error);
          
          // Optional: Display an error message to the user
        }
      );
    }
  }
  
}
