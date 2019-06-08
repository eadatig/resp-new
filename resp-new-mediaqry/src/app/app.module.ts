import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CapbodyComponent } from './capbody/capbody.component';
import { CapOneComponent } from './cap-one/cap-one.component';
import { CapTwoComponent } from './cap-two/cap-two.component';
import { CapThreeComponent } from './cap-three/cap-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CapbodyComponent,
    CapOneComponent,
    CapTwoComponent,
    CapThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
