import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-snipet',
  templateUrl: './tarjeta-snipet.component.html',
  styleUrls: ['./tarjeta-snipet.component.scss']
})
export class TarjetaSnipetComponent implements OnInit {

  artistaId: string =""

  @Input() data: any = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  verArtista(item:any){
    console.log(item);

    if (item.type=== "artist"){
      this.artistaId = item.id
    } else {
      this.artistaId = item.artists[0].id
    }
    console.log("artista: ", this.artistaId);
    this.router.navigate(['/artista',this.artistaId])
    
  }

}
