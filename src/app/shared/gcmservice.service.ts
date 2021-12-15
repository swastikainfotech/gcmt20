import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {} from '../player-registration/player-registration.component';
@Injectable({
  providedIn: 'root',
})
export class GcmserviceService {
  public response: { dbPath: '' };
  //  public PhotoName:string;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:7320/api';

  formModel = this.fb.group({
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

  register() {
    var body = {
      Name: this.formModel.value.Name,
      MotherName: this.formModel.value.MotherName,
      FatherName: this.formModel.value.FatherName,
      Dob: this.formModel.value.Dob,
      Education: this.formModel.value.Education,
      School: this.formModel.value.School,
      District: this.formModel.value.District,
      Vikaskhand: this.formModel.value.Vikaskhand,
      NyayPanchyat: this.formModel.value.NyayPanchyat,
      GramPanchyat: this.formModel.value.GramPanchyat,
      Mobile: this.formModel.value.Mobile,
      AadharNumber: this.formModel.value.AadharNumber,
      PhotoName:this.response
      // pAadhar:this.imgpath
      //PhotoName:this.response.dbPath,
    };

    return this.http.post(this.BaseURI + '/PlayerDetails', body);
  }

  //StaffRegistration
  staffModel = this.fb.group({
    Name: ['', Validators.required],
    Profile: [''],
    Mobile: ['', Validators.required],
    Block: [''],
  });

  staffReg() {
    var body1 = {
      Name: this.staffModel.value.Name,
      Profile: this.staffModel.value.Profile,
      Mobile: this.staffModel.value.Mobile,
      Block: this.staffModel.value.Block,
    };
    return this.http.post(this.BaseURI + '/Staffs', body1);
  }

  refreshUmpire() {
    return this.http.get(this.BaseURI + '/Staffs');
  }
  refreshScorer() {
    return this.http.get(this.BaseURI + '/Staffs/Scorer');
  }



  public uploadFinished (event: any){
    console.log('Reponse Upload', event);
    this.response = event;
  }

  public imgpath = (serverPath: string) => {
    return 'http://localhost:7320/${serverPath}';
  };

  

 

}
