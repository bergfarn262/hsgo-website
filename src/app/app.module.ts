import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JustinflashbangbuttonComponent } from './justinflashbangbutton/justinflashbangbutton.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JustinflashbangbuttonComponent,
    DropdownMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
