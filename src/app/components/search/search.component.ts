import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifiApiService } from 'src/app/services/spotifi-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artists:Observable<any> = new Observable()

  constructor(private spotifiApi: SpotifiApiService) { }

  ngOnInit(): void {
  }

  buscar(value:any){
    this.artists = this.spotifiApi.getArtist(value)
    .pipe(map((data:any)=>{
      console.log("artistadata: ",data);
      return data.artists.items
      
    }))
    console.log("artista: ",this.artists);
    

  }

}
