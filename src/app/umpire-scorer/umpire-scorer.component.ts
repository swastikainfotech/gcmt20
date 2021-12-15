import { Component, OnInit } from '@angular/core';
import { GcmserviceService } from '../shared/gcmservice.service';

@Component({
  selector: 'app-umpire-scorer',
  templateUrl: './umpire-scorer.component.html',
  styleUrls: ['./umpire-scorer.component.css']
})
export class UmpireScorerComponent implements OnInit {
  upireDetails:[];
  scorerDetails:[]
  constructor(private service:GcmserviceService) { }

  ngOnInit(): void {
    this.UmpireList();
    this.ScorerList();
  }

  UmpireList(){
    this.service.refreshUmpire()
    .subscribe(
      (res:any)=>{
        if(res){
        this.upireDetails=res;
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
  ScorerList(){
    this.service.refreshScorer()
    .subscribe(
      (res:any)=>{
        if(res){
        this.scorerDetails=res;
       // console.log(this.staffdetails);
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
}
