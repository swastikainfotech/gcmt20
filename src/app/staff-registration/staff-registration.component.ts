import { Component, OnInit } from '@angular/core';
import { GcmserviceService } from '../shared/gcmservice.service';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrls: ['./staff-registration.component.css']
})
export class StaffRegistrationComponent implements OnInit {
  staffdetails:[];
  constructor(public service:GcmserviceService) { }

  ngOnInit(): void {
    this.service.staffModel.reset();
   
  }

  onSubmit(){
    this.service.staffReg().subscribe(
      (res:any)=>{
        if(res){
          this.service.staffModel.reset();
          alert('Staff Details added successfully');
        }
        else
        {
          console.log('Something went wrong');
        }
      },
      err=>{
        console.log('error');
      }
    );
  }

 

}
