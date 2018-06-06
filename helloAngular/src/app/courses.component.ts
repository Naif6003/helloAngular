import { Component } from "@angular/core";
let courses = require("./service.component")

@Component({
    selector: 'courses',   // <courses> </courses>
    template: ` <b> {{title}} </b>  
                <br/>
                <div *ngFor="let course of coursesList">
                     Course id: {{course.id}} <br/>
                     course name: {{course.name}} <br/>
                     course number: {{course.number}} <br/>
                     course units: {{course.units}} <br/>
                     course instructor: {{course.instructor}} <br/>
                     <br/>
                </div>
                `

})

export class CoursesComponent {
    title = "List of Courses: "
    coursesList = courses
}