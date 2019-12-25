import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListPokemons} from '../list-pokemons';
import {MatSelectModule} from '@angular/material/select';
import { Pokemon } from '../pokemon';
import { PokeAPIService } from '../poke-api.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.sass']
})
export class MyComponentComponent implements OnInit {

  id: number = 0 ;
  filtre: string = '' ;
  search: string = '' ;
  select: Pokemon = {
    id: 0,
  abilities: [],
  base_experience: 1,
  forms: [{
    name: '',
    url: '',
  }],
  game_indices: [{
    game_index: 0,
    version: [{
      name: '',
      url: '',
    }]
  }],
  height: '',
  held_items: '',
  is_default: true,
  location_area_encounters: '',
  moves: [{
    move: [{
      name: '',
      url: '',
    }],
    version_group_details: [],
  }],
  name: '',
  order: 0,
  species: [{
    name: '',
    url: '',
  }],
  sprites: [],
  stats: [],
  types: [],
  weight: 0,
  } ;
  // select: Pokemon = {id: 0, name: 'Dracofeu'} ;
  pokemons =  ListPokemons ;
  selected: any;
  ability: any;
  val: Pokemon[] = null;

  // displayedColumns: string[] = ['name'];
  displayedColumns: string[] = ['id', 'name', 'button'];
  dataSource  = this.pokemons;

  constructor(private pokeAPIService: PokeAPIService) {
    // console.log('Pokemons : ', this.pokemons);
    this.drawPokemon();
  }

  ngOnInit() {
  }

  drawPokemon() {
    console.log('pokemon selectionner : ', this.select);

    this.pokeAPIService.getPokemonList()
    .subscribe( response => {
      console.log('success: ', response);
       this.pokemons = [...response.results];
      //  this.pokemons = [... response.results];
       console.log('Pokemon --- text :' , this.pokemons);
       this.getPokemonByUrl(this.pokemons[0].url);

       this.ability = [];
      //  console.log("Pokemon :" , this.val);
    });
  }


  getPokemon() {
    let value = this.pokeAPIService.getPokemonList();
    // .subscribe( response => {
    //   console.log('success: ', response);
    // });
    console.log('pokemon selectionner : ', this.select);
    console.log('list : ', value);
  }

  getPokemonByUrl(url: string) {

    console.log('url test ' , url);
    this.pokeAPIService.getPokemonByUrl(url)
    .subscribe( response => {
      console.log('success-----rate: ', response);
      this.select = response;

       console.log('pokemon selectionner : ', this.select);
       this.getPokemonAbilityByUrl(this.select.abilities);
    });
  }

  // getPokemonAbilityByUrl(url: string) {
  getPokemonAbilityByUrl(abilities: any) {

    this.ability = [];
    console.log('abilities :' , abilities);
    abilities.forEach(element => {

      this.pokeAPIService.getPokemonAbilityByUrl(element.ability.url)
      .subscribe( response => {
        this.ability.push(response);
      });
    });
    console.log('pokemon abilities : ', this.ability);
  }

  getPokemonById(id: number) {
    console.log('id test ' , id);
    // let val = url.split('/');
    // console.log('id test ' , val);

    this.pokeAPIService.getPokemonById(parseInt(id))
    .subscribe( response => {
      console.log('success-----rate: ', response);
      this.select = response;
      console.log('pokemon selectionner : ', this.select);
      this.getPokemonAbilityByUrl(this.select.abilities);
    });
  }

  getPokeId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

}
