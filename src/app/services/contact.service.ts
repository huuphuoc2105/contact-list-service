import { Injectable } from '@angular/core';
import { CONTACTS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts() {
    return CONTACTS;
  }

  getContactById(id: number) {
    return CONTACTS.find(contact => contact.id === id);
  }
}
