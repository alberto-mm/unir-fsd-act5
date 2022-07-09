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
				imagen: 'https://via.placeholder.com/300',
				texto: 'Blimey unfold Woodland whether precedes goodwill defending belonged now bark innocent? Limited gonna gallop Oakenshield ever-watchful way allegiance few boiling mouth? Job Wood-elves warn riddles. Anchored Barahir slaughtered trouble-making unrest crowned fun fat. And what about very old friends? Gimli left believe boots. Dwarf meat\'s search. Remade thee position looks hoot Dimrill petty! Thunder leaves sauteed solid painted Adamant hunting elected but wolves! Angmar base anyway cries dangers dignity kitchen laid search crop twittering homage.',
				fecha: 'fecha de la noticia 1'
			},
			{
				titulo: 'Título 2',
				imagen: 'https://via.placeholder.com/300',
				texto: 'Gone handful Fangorn blessing speaking admire. Dim Silvan tombs proud relations. Stair tidings bond Uruk-hai poison\'s. Hobbiton smelling they\'ve miss withhold level walked drawn. Canniest Elfs arrived ready guide tries. Fallen character Bombur\'s starving malt. And what about very old friends? Ending Adamant remade. Please plan river-folk Fundin won\'t unto although.',
				fecha: 'fecha de la noticia 2'
			}
		];
	}	

	ngOnInit(): void {
        this.cargarNoticias();
	}

    cargarNoticias(): void {
        this.listado = '';
        //this.arrNoticias.forEach(noticia => this.listado += `<li>${noticia.titulo} // ${noticia.imagen} // ${noticia.texto} // ${noticia.fecha}</li>`);
        this.arrNoticias.forEach(noticia => this.listado += this.mostrarNoticia(noticia.titulo, noticia.imagen, noticia.texto, noticia.fecha));
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
            this.borrarCampos();
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
            <h3>${pTitulo}</h3>
            <img src='${pImagen}' alt='${pTitulo}' class="imagen-noticia">
            <p>${pTexto}</p>
            <p>${pFecha}</p>
        </li>
        `;
    }

}
