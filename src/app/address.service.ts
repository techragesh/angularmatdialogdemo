import { Injectable } from '@angular/core';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor() {}

  _addressList: Address[] = [];

  addAddress(address: Address) {
    address.id = this._addressList.length + 1;
    this._addressList.push(address);
    console.log(this._addressList);
  }

  editAddress(address: Address) {
    const index = this._addressList.findIndex(i => i.id === address.id);
    this._addressList[index] = address;
  }

  deleteAddress(id: number) {
    const index = this._addressList.findIndex(i => i.id === id);
    this._addressList.splice(index, 1);
  }

  getAddress() {
    return this._addressList;
  }
}
