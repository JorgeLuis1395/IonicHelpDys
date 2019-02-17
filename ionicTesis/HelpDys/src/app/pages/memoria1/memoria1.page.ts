import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-memoria1',
  templateUrl: './memoria1.page.html',
  styleUrls: ['./memoria1.page.scss'],
})
export class Memoria1Page implements OnInit {
    private images = [
        {id: 1, url: "/assets/imagen/homero.jpg"},
        {id: 2, url: "/assets/imagen/burns.jpg"},
        {id: 3, url: "/assets/imagen/home1.jpg"},
        {id: 4, url: "/assets/imagen/home2.jpeg"},
        {id: 5, url: "/assets/imagen/poke.jpg"},
        {id: 6, url: "/assets/imagen/charman.png"},
        {id: 7, url: "/assets/imagen/bul.jpeg"},
        {id: 8, url: "/assets/imagen/pid.png"}
    ];
    public images_inact = "/assets/imagenes/poker.png";
    public cards = [];
    private last_select_id = null;
    private aciertos = 8;
    private count_aciertos = 0;
    public intentos = 32;
    public cont_intentos = 0;
  constructor(public alertController: AlertController) { }
    ngOnInit() {
        let count_index = 0;
        for (let i = 0; i < this.aciertos * 2; i++) {
            if (count_index == this.aciertos) {
                count_index = 0;
            }
            let img = this.images[count_index];
            this.cards.push({
                id: img.id,
                url: img.url,
                visible: false, //si la imagen se muestra
                active: true //seleccionable
            });
            count_index++;
        }
        this.RandomArray(this.cards);
    }


    card_selected(idx) {
        if (!this.cards[idx].active) {
            return;
        }
        this.cards[idx].visible = true;

        if (this.last_select_id == null) {
            this.last_select_id = idx;
            this.cards[idx].visible = true;
            this.cards[idx].active = false;
        } else {
            if (this.cards[this.last_select_id].id == this.cards[idx].id) { //aumentar aciertos si coinciden
                this.count_aciertos++;
                this.cards[idx].visible = true;
                this.cards[idx].active = false;
                this.last_select_id = null;
            } else { //no hacen match

                let _this = this;
                setTimeout(function () {
                    _this.cards[_this.last_select_id].visible = false; //ocultar
                    _this.cards[_this.last_select_id].active = true; //activar
                    _this.cards[idx].visible = false;
                    _this.last_select_id = null;
                }, 0.2 * 1000)

            }
        }
        if (this.aciertos == this.count_aciertos) {
            this.presentAlertConfirm();
            //window.location.reload();
        }
        if (this.cont_intentos == this.intentos - 1) {
            this.presentAlertPerdiste();
            // window.location.reload();
        }
        this.cont_intentos++;

    }

    RandomArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Ganaste!',
            message: 'Felicitaciones <strong><img src="/assets/imagen/totodile.gif"></strong>!!!',
            buttons: [
                {
                    text: 'Siguiente Nivel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Menu',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }
    async presentAlertPerdiste() {
        const alert1 = await this.alertController.create({
            header: 'Perdiste!',
            message: 'Mejora tu concetración  <strong><img src="/assets/imagen/triste.gif"></strong>!!!',
            buttons: [
                {
                    text: 'Volver a intentarlo',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        window.location.reload();
                    }
                }, {
                    text: 'Menu',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert1.present();
    }
}