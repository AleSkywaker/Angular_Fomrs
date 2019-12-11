import { Component, OnInit } from "@angular/core";
import { Contact, PhoneType } from "../../contact.model";
import { ContactsService } from "../../contacts.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
  public model: Contact = new Contact(0, "");
  public readonly phoneType: string[] = Object.values()
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {}

  addContact() {
    console.log(this.model);
    this.contactsService.addContact(this.model);
    this.model = new Contact(0, "");
  }
}
