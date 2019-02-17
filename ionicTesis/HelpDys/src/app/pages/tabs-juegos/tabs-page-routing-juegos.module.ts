import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabsJuegosPage} from "./tabs-juegos.page";
import {RecursosJuegosPage} from "../recursos-juegos/recursos-juegos.page";
import {AhorcadoPage} from "../ahorcado/ahorcado.page";
import {MemoriaPage} from "../memoria/memoria.page";
import {Memoria1Page} from "../memoria1/memoria1.page";


const routes: Routes = [
    {
        path: 'tabs',
        component: TabsJuegosPage,
        children: [
            {
                path: 'menu',
                component: RecursosJuegosPage,
                outlet: 'menu'
            },
            // tab one
            {
                path: 'ahorcado',
                component: AhorcadoPage,
                outlet: 'ahorcado'
            },
            // tab two
            {
                path: 'memoria',
                component: MemoriaPage,
                outlet: 'memoria'
            },
            {
                path: 'memoria1',
                component: Memoria1Page,
                outlet: 'memoria'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingJuegosModule { }
