import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  	arrNoticias: Noticia[] = [];
    titulo: string = '';
    imagen: string = '';
    texto: string = '';
    fecha: string = '';

    listado: string = '';

  	constructor() {
		this.arrNoticias = [
			{
				titulo: 'Título 1',
				imagen: 'url de la imagen 1',
				texto: 'texto de la noticia 1',
				fecha: 'fecha de la noticia 1'
			},
			{
				titulo: 'Título 2',
				imagen: 'url de la imagen 2',
				texto: 'texto de la noticia 2',
				fecha: 'fecha de la noticia 2'
			}
		];
	}	

	ngOnInit(): void {
        this.cargarNoticias();
	}

    cargarNoticias(): void {
        this.listado = '';
        this.arrNoticias.forEach(noticia => this.listado += `<li>${noticia.titulo} // ${noticia.imagen} // ${noticia.texto} // ${noticia.fecha}</li>`);
    }

    guardarNoticia(): void {
        // TODO: comprobar noticias duplicadas
        if (this.titulo !== '' && this.imagen !== '' && this.texto !== '' && this.fecha !== '') {
            let nuevaNoticia: Noticia = {
                titulo: this.titulo,
				imagen: this.imagen,
				texto: this.texto,
				fecha: this.fecha
            }
            this.arrNoticias.push(nuevaNoticia);
            this.cargarNoticias();
            this.titulo = '';
			this.imagen = '';
			this.texto = '';
			this.fecha = '';
        } else {
            alert('¡Los campos no pueden estar vacíos!');
        }
    }

}
