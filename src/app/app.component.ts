import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studentCollection: Array<object> = [];
  studentRecord: object;

  studno: number;
  studfname: string;
  studlname: string;
  studprog: string;
  studyr: number;

  printing = false;

  addStudentEntry(): boolean {
    this.printing = false;
    
    this.studentRecord = {
      studNumber: this.studno,
      studFirstName: this.studfname,
      studLastName: this.studlname,
      studProgram: this.studprog,
      studYear: this.studyr
    };

    this.studentCollection.push(this.studentRecord);
    this.clearValues();
    console.log("asd");
    return true;
  }

  listStudents(): void{
    this.printing = true;
  }

  clearValues(): void{
    this.studno = null;
    this.studfname = null;
    this.studlname = null;
    this.studprog = null;
    this.studyr = null;
  }

  onSubmit(register){
    console.log(register);
  }

}