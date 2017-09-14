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
    this.printing = false;
    
    this.studentRecord = {
      studNumber: register.value.studno,
      studFirstName: register.value.studfname,
      studLastName: register.value.studlname,
      studProgram: register.value.studprog,
      studYear: register.value.studyr
    };
    console.log(this.studentRecord);
    this.studentCollection.push(this.studentRecord);
    
    register.reset();
    this.listStudents();
    
  }

}