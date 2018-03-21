import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerCreateComponent } from './player-create/player-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerEditComponent,
    PlayerDetailComponent,
    PlayerCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
