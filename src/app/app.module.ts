import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BeginComponentComponent } from './begin-component/begin-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokeAPIService } from './poke-api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BeginComponentComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [PokeAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
