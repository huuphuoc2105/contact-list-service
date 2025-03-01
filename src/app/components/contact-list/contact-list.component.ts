import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];  // Explicitly define the array type
  filteredContacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();  
    this.filteredContacts = [...this.contacts];
  }

  onSearch(query: string) {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
