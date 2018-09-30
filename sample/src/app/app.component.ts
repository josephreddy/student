import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule, FormArray, NgModel} from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent {
  title = 'sample';
  sname:any;
  course:any;
  courseid:any;
  place:any;
  project:any;
  updatevalues:any;
  angForm: FormGroup;
  tableData:any;
  obj:any;
  tableData1:any;
   constructor(private fb: FormBuilder,
    private userService:StudentService 
    ) {
    this.createForm();
  }
  ngOnInit() {
    this.updatevalue();
  }
  createForm() {
    this.angForm = this.fb.group({
      studentname: ['', Validators.required],
      course: ['', Validators.required],
      courseid: ['', Validators.required],
      place: ['', Validators.required],
      project: ['', Validators.required]
    });
  }
  submit(){

    var object={
        "Sname":this.sname,
        "course":this.course,
        "courseid":this.courseid,
        "place":this.place,
        "project":this.project
    }
    this.userService.sendDetails(object).subscribe(
      data => {
      alert("sumited succesfully");
    });
}
updatevalue(){
  this.userService.getDetails(this.obj).subscribe(
    data => {
      this.tableData = JSON.parse('[{"sname":"a","course":"c","courseid":12,"place":"bang","project":"userdetailspro"},{"sname":"a","course":"c","courseid":12,"place":"bang","project":"userdetailspro"},{"sname":"a","course":"c","courseid":12,"place":"bang","project":"userdetailspro"},{"sname":"a","course":"c","courseid":12,"place":"bang","project":"userdetailspro"}]');
      var dataArray1 = new Array;
      for(var o in this.tableData) {
          dataArray1.push(this.tableData[o]);
      console.log(dataArray1);
      }
  });
}

};
