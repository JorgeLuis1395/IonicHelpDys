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
import {CuentosProvider} from './providers/cuentos';
import {LoginProvider} from "./providers/login";
import {DatosUsuarioProvider} from "./providers/datosUsuario";
import {Globals} from "./providers/global";

import {File} from '@ionic-native/File/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Camera} from '@ionic-native/camera/ngx';


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
    providers: [SplashScreen,
        File,
        Camera,
        WebView,
        StatusBar,
        FilePath,
        EstudiantesProvider,
        CuentosProvider,
        LoginProvider,
        DatosUsuarioProvider, Globals,],
    bootstrap: [AppComponent]
})
export class AppModule {
}
