import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rsvp } from './Rsvp';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'materialui';
  diet = [ false, false, false];

  model = new Rsvp("", "", "");

  ngOnInit(){
    // from OnInit Interface
  }

  ngOnDestroy(){
    // from OnDestroy interface
  }

  processForm(form: NgForm){
    console.log(form);
    const name = form.controls['name'].value;
    const email = form.controls['email'].value;
    const phone = form.controls['phone'].value;
    const attending = form.controls['attending'].value;
    const dob = form.controls['dob'].value;
    console.log("Process form ..."); 
    console.log("Name : " + name);
    console.log("Email : "  + email);
    console.log("Phone : " + phone);
    console.log("Attending : " + attending);
    console.log("dob : " + dob);
    console.log(this.diet);
    //form.reset();
  }
}
