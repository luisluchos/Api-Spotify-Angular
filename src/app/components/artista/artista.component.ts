import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifiApiService } from 'src/app/services/spotifi-api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  
  artista: Observable<any> = new Observable

  constructor(private spotifiApi: SpotifiApiService, private router: ActivatedRoute) { 

   this.router.params.subscribe(params=>{
     this.getArtista(params["id"])
    })
    
  }

  ngOnInit(): void { }

  getArtista(id:string){
    this.artista = this.spotifiApi.visitArtist(id)
    //con el pipe podemos ver el contenido del obserbable en el log
    /* .pipe(map((data:any)=>{
      console.log("ver artista: ",data); 
      return data
     })) */

    console.log("ver artista: ",this.artista); 

  }


}
