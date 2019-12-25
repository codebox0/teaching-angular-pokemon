import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  url: String = "http://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get<Pokemon[]>(this.url + `pokemon`, {responseType: 'json'});
    // return this.http.get<Pokemon[]>(this.url + `pokemon`, optionRequete);
  }

  getPokemonById(id: number) {
    console.log('id  : ', id);
    return this.http.get(this.url + 'pokemon/' + id, {responseType: 'json'});
  }

  getPokemonByName(name: string) {
    return this.http.get(this.url + 'pokemon/' + name, {responseType: 'json'});
  }

  getPokemonByUrl(url: string) {
    return this.http.get<Pokemon>(url, {responseType: 'json'});
  }

  getPokemonAbilityByUrl(url: string) {
    return this.http.get(url, {responseType: 'json'});
  }
}
