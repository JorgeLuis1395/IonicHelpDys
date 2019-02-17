import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage {
    participantes = ['ARAÑA', 'BURRO', 'CARRO', 'DADO', 'ELEFANTE', 'FOCA', 'GATO', 'HOJA', 'IGUANA', 'JIRAFA', 'LEON', 'MURCIELAGO', 'NIÑO', 'OSO', 'PELOTA', 'QUESO', 'RATON', 'SAPO', 'TOMATE', 'UNO', 'SIETE', 'SEIS', 'NUEVE'];
    imagenes = ['araña.PNG', 'burro.PNG','carro.PNG','dado.PNG','elefante.PNG','foca.PNG','gato.PNG','hoja.PNG','iguana.PNG','jirafa.PNG','leon.PNG','murcielago.PNG','niño.PNG','oso.PNG','pelota.PNG','queso.PNG','raton.PNG','sapo.PNG','tomate.PNG','UNO.PNG','siete.PNG','seis.PNG','nueve.PNG'];
    numero_participantes = this.participantes.length;
    numero = Math.floor(Math.random() * this.numero_participantes);

    palabra = this.participantes[this.numero];
    imagen = this.imagenes[this.numero];
    palabraOculta = '';

    intentos = 0;

    gano = false;
    perdio = false;


    letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    constructor() {

        this.palabraOculta = '_ '.repeat(this.palabra.length);

    }

    comprobar(letra) {

        this.existeLetra(letra);

        const palabraOcultaArr = this.palabraOculta.split(' ');

        for (let i = 0; i < this.palabra.length; i++) {

            if (this.palabra[i] === letra) {
                palabraOcultaArr[i] = letra;
            }

        }

        this.palabraOculta = palabraOcultaArr.join(' ');
        this.verificaGane();

    }

    verificaGane() {

        const palabraArr = this.palabraOculta.split(' ');
        const palabraEvaluar = palabraArr.join('');
        for (let i = 0; i < this.palabra.length; i++) {
            if (palabraEvaluar === this.palabra) {
                this.gano = true;
                console.log('Usuario GANO');
            }

            if (this.intentos >= 9) {
                this.perdio = true;
                console.log('Usuario perdio');
            }
        }
    }


    existeLetra(letra) {

        if (this.palabra.indexOf(letra) >= 0) {
            // console.log('Letra existe ' + letra );
        } else {
            // console.log('Letra NO existe ' + letra );
            this.intentos++;
        }

    }

}
