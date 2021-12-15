import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPlayerRegistration } from '../shared/models/i-player-registration';
import { environment } from '../../environments/environment.prod';
import { GcmserviceService } from '../shared/gcmservice.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerRegistrationService {

  url = `${environment.apiUrl}PlayerDetails`;
  photourl='http://api.devnox.in/';
  vikas:[];
  nyaypanchyat:[];
  grampanchyat:[];
  constructor(private httpClient: HttpClient,private service :GcmserviceService) { 
   
  }
  
  

  post(body: IPlayerRegistration) {
    return this.httpClient.post(this.url, body);
  }
  get(){
    return this.httpClient.get(this.url);
  }

  

   getBlock(){
    return this.httpClient.get('http://localhost:7320/'+'api/DropDown');
    
  }

  getNyay(vid:number){
    return this.httpClient.get("http://localhost:7320/api/DropDown/"+vid);
}

getGram(gid:number){
  return this.httpClient.get("http://localhost:7320/api/Gram/"+gid);
}

}
