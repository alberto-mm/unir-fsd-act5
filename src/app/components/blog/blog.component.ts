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
				titulo: 'LOTRem Ipsum',
				imagen: 'https://via.placeholder.com/300',
				texto: '10000 Earendil warned. Underhill consequence funeral tricksed ruling getting. Out-of-pocket Legolas descend. Pledge Captain conjured vast. Travel dung we\'d utterly rally undimmed robber Sigrid crowns. Nobody tosses a Dwarf. Boromir sleeping hard-won vine son comfort. Extra pages upon fitted climbing weep Ori winter-thickets.',
				fecha: new Date().toLocaleDateString() // Asigna la fecha en la que carga el componente
			},
			{
				titulo: 'One text to rule them all',
				imagen: 'https://via.placeholder.com/300',
				texto: 'One Ring to rule them all. Head-on cruel sent Grubbs skinned gut being! Rode standing friends distance strengths Lasgalen carries elevenses beneath. Sawed Arwen Evenstar powerless race perhaps? Restless skinned force sakes Merry haven\'t sniveling bidden barrel. Galadriel unleash sire sharp matters oppose. Vale throws dragon rot Galadhrim there\'s least whispers waters? Window prosaic Mungo\'s helpful asking cream pack place sir dreams lights. Agents Elessar bore.',
				fecha: new Date().toLocaleDateString() // Asigna la fecha en la que carga el componente
			}
		];
	}	

	ngOnInit(): void {
        this.cargarNoticias();
	}

    cargarNoticias(): void {
        this.listado = '';
        this.arrNoticias.forEach(noticia => this.listado += this.mostrarNoticia(noticia.titulo, noticia.imagen, noticia.texto, noticia.fecha));
    }

    guardarNoticia(): void {
        if (this.titulo !== '' && this.imagen !== '' && this.texto !== '' && this.fecha !== '') {
            let pos = this.arrNoticias.findIndex(noticia => noticia.titulo === this.titulo);
            
            if (pos === -1) {
                let nuevaNoticia: Noticia = {
                    titulo: this.titulo,
                    imagen: this.imagen,
                    texto: this.texto,
                    fecha: this.fecha
                }
                this.arrNoticias.push(nuevaNoticia);
                this.cargarNoticias();
                this.borrarCampos();
            } else {
                alert('Ya existe una noticia con ese mismo título, prueba con otro distinto');
            }
        } else {
            alert('¡Los campos no pueden estar vacíos!');
        }
    }

    borrarCampos(): void {
        this.titulo = '';
        this.imagen = '';
        this.texto = '';
        this.fecha = '';
    }

    mostrarNoticia(pTitulo: string, pImagen: string, pTexto: string, pFecha: string): string {
        return `
        <li class="lista-item">
            <h3 class="titulo-noticia">${pTitulo}</h3>
            <img src='${pImagen}' alt='${pTitulo}' class="imagen-noticia">
            <p class="texto-noticia">${pTexto}</p>
            <p class="fecha-noticia">${pFecha}</p>
        </li>
        `;
    }

}
