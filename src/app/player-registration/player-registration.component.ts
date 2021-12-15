import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GcmserviceService } from '../shared/gcmservice.service';
import { IPlayerRegistration } from '../shared/models/i-player-registration';
import { PlayerRegistrationService } from './player-registration.service';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent implements OnInit {
  imagePath: any;
  imgURL: any;
  players:[];
  block:[];
  nyay:[];
  gram:[];
  
  public message: string = '';
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PlayerRegistrationService
  ) {}

  initForm() {
    this.registrationForm = this.fb.group({
      Name: ['', Validators.required],
      MotherName: ['', Validators.required],
      FatherName: ['', Validators.required],
      Mobile: ['', Validators.required],
      Dob: [''],
      Education: [''],
      School: [''],
      District: [''],
      Vikaskhand: [''],
      NyayPanchyat: [''],
      GramPanchyat: [''],
      AadharNumber: [''],
      AadharPhoto: [''],
      Terms: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.refresh();
    this.blist();
  }

  onUploadFinished(path: string) {
    this.imagePath = path;
  }

  onSubmit() {
    const formData: IPlayerRegistration = {
      name: this.registrationForm.value.Name,
      mobile: this.registrationForm.value.Mobile,
      motherName: this.registrationForm.value.MotherName,
      fatherName: this.registrationForm.value.FatherName,
      dob: this.registrationForm.value.Dob,
      education: this.registrationForm.value.Education,
      school: this.registrationForm.value.School,
      district: this.registrationForm.value.District,
      vikaskhand: this.registrationForm.value.Vikaskhand,
      nyayPanchyat: this.registrationForm.value.NyayPanchyat,
      gramPanchyat: this.registrationForm.value.GramPanchyat,
      aadharNumber: this.registrationForm.value.AadharNumber,
      photoName: this.imagePath,
    };

    this.service.post(formData).subscribe(
      (res: any) => {
        if (res) {
          this.registrationForm.reset();
          this.refresh();
          alert('Player Details added successfully');
        } else {
          console.log('Something went wrong');
        }
      },
      (err) => {
        console.log('error');
      }
    );
  }

  showImg(files) {
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  refresh(){
    this.service.get().subscribe(
      (res:any)=>{
        if(res)
        this.players=res;
        else
        alert('Unable to fetch data ');
      },
      (err)=>{
        alert("error... fetching data");
      }
    )
  }

  blist(){
    this.service.getBlock()
    .subscribe(
      (res:any)=>{
        if(res){
        this.block=res;
      //  console.log(this.staffdetails);
        }
        else
        {
          console.log("Something..");
        }
      },
      err=>{
        console.log("error");
      }
    );

   }
//
   nlist(vid:number){
    this.service.getNyay(vid)
    .subscribe(
      (res:any)=>{
        if(res){
        this.nyay=res;
      //  console.log(this.staffdetails);
        }
        else
        {
          console.log("Something.. nyay");
        }
      },
      err=>{
        console.log("error nyay");
      }
    );

   }

   //
   glist(gid:number){
    this.service.getGram(gid)
    .subscribe(
      (res:any)=>{
        if(res){
        this.gram=res;
      //  console.log(this.staffdetails);
        }
        else
        {
          console.log("Something.. gram");
        }
      },
      err=>{
        console.log("error gram");
      }
    );

   }


  
}
