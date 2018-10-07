import { AddressService } from './../address.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddressComponent>,
    private addressService: AddressService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      id: [this.data.id],
      firstName: [this.data.firstName, [Validators.required]],
      lastName: [this.data.lastName, [Validators.required]],
      address: [this.data.address, [Validators.required]],
      postCode: [this.data.postCode, [Validators.required]],
      city: [this.data.city, [Validators.required]]
    });
  }

  onSubmit() {
    if (isNaN(this.data.id)) {
      this.addressService.addAddress(this.addressForm.value);
      this.dialogRef.close();
    } else {
      this.addressService.editAddress(this.addressForm.value);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
