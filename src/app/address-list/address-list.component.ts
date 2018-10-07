import { AddressService } from './../address.service';
import { AddressComponent } from './../address/address.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  isDialogOpened = true;

  constructor(
    private matDialog: MatDialog,
    private addressService: AddressService
  ) {}

  ngOnInit() {}

  get addressList() {
    return this.addressService.getAddress();
  }

  addAddress() {
    this.isDialogOpened = true;
    const dialogRef = this.matDialog.open(AddressComponent, { data: {} });

    dialogRef.afterClosed().subscribe(res => {
      this.isDialogOpened = false;
    });
  }

  editAddress(id: number) {
    this.isDialogOpened = true;
    const address = this.addressService.getAddress().find(i => i.id === id);
    const dialogRef = this.matDialog.open(AddressComponent, {
      data: address
    });

    dialogRef.afterClosed().subscribe(res => {
      this.isDialogOpened = false;
    });
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id);
  }
}
