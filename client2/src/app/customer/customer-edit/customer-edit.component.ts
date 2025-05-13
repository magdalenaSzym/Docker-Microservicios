import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../model/Customer';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit  {

  customer : Customer;
  customers :Customer[];

  errorMessage : string;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    if (this.data.customer != null) {
      this.customer = Object.assign({}, this.data.customer);
    }
    else {
      this.customer= new Customer();
    }

  }

  onSave() {
     this.customerService.saveCustomer(this.customer).subscribe({
          next: (result) => {
            this.dialogRef.close();
          },
          error: (error) => {
            this.errorMessage = error.error.message
           alert ('Error saving customer: '+ this.errorMessage)

          }

     });


  }

  onClose() {
    this.dialogRef.close();
  }

}


