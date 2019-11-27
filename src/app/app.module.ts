import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import es from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';

registerLocaleData(es, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es'}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
