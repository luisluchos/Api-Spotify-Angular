import { Component, OnInit } from '@angular/core';
import { SpotifiApiService } from 'src/app/services/spotifi-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 // newMusic: any[]=[]
  newMusic:Observable<any> = new Observable()


  constructor(private spotifiApi:SpotifiApiService) { 
    
   // usando la pispes
   this.newMusic = this.spotifiApi.getAllNewMusic()
   .pipe(map((data:any)=>{
   console.log("music: ",data.albums.items);
    return data.albums.items
    
  }))

/* this.spotifiApi.getAllNewMusic().subscribe((data:any)=>{
this.newMusic= data.albums.items
console.log("music: ",this.newMusic); 
})  */

  }

  ngOnInit(): void {

  }

}
