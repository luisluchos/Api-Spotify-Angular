import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifiApiService {

  constructor(private http:HttpClient) { }

  getQuery(query:any){
    const headers = new HttpHeaders({
      "Authorization":"Bearer BQAQlAJZbjfr5yxr6j9loMrDZUSHjYeoccqBEu7ngp4u-rG0jlAFjJsCZms7YE-li0ebzKa5Ibm0OdYhrU4"
    })
    const url=`https://api.spotify.com/v1/${query}`;
    return this.http.get(url,{headers})
  }

  getAllNewMusic():Observable<any>{
   return this.getQuery("browse/new-releases")
  }

  getArtist(artist:string){
    return this.getQuery(`search?query=${artist}&type=artist&offset=0&limit=20`)
  }

  visitArtist(id:string){
    return this.getQuery(`artists/${id}`)
  }





/* 
 //SIN USAR GETQUERY()
  getAllNewMusic(){

    const headers = new HttpHeaders({
      "Authorization":"Bearer BQAbHwRg-hVhwvJTO_kL0ExLrlikt9J4vP6UVTQdDzHO4XR7BVR2rre63S52xeq3-U3e-7cF-cBwOxd38Ro"
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
  }

  getArtist(artist:string){
    const headers = new HttpHeaders({
      "Authorization":"Bearer BQAbHwRg-hVhwvJTO_kL0ExLrlikt9J4vP6UVTQdDzHO4XR7BVR2rre63S52xeq3-U3e-7cF-cBwOxd38Ro"
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${artist}&type=artist&offset=0&limit=20`,{headers})

  } */
} 
