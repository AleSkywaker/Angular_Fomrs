import { Component, OnInit, ViewChild } from "@angular/core";
import { Contact, PhoneType } from "../../contact.model";
import { ContactsService } from "../../contacts.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
  public model: Contact = new Contact(0, "", null, []);
  public readonly phoneTypes: string[] = Object.values(PhoneType);
  @ViewChild("contactForm", { static: true }) contactForm: NgForm;
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {}

  addContact() {
    console.log(this.model);
    this.contactsService.addContact(this.model);
    this.model = new Contact(0, "", null, []);
    this.contactForm.reset();
  }
  addNewPhoneToModel() {
    this.model.phones.push({ type: null, number: null });
  }
}
