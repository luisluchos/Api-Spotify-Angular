import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(imagenes: any[]): unknown {

    //si no hay imagenes le enseñamos la ruta de la imagen
    return imagenes.length === 0 ? 'assets/images/noimage.png' : imagenes[0].url;
  }

}
