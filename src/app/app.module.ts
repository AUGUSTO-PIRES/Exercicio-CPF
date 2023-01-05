import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidadorCpfComponent } from './pages/validador-cpf/validador-cpf.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

import { HeaderPageComponent } from './shared/header-page/header-page.component';
import { FooterPagesComponent } from './shared/footer-pages/footer-pages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValidadorCpfComponent,
    HeaderPageComponent,
    FooterPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
