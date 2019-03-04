import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IonicModule, NavParams} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {EstudiantesProvider} from './providers/estudiantes';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {CuentosProvider} from './providers/cuentos';
import {LoginProvider} from "./providers/login";
import {DatosUsuarioProvider} from "./providers/datosUsuario";
import {Globals} from "./providers/global";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        }),
    ],
    declarations: [AppComponent],
    providers: [SplashScreen, Camera, StatusBar, EstudiantesProvider, CuentosProvider, LoginProvider,DatosUsuarioProvider, Globals],
    bootstrap: [AppComponent]
})
export class AppModule {
}
