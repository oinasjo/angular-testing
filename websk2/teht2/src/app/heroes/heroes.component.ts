/**
 * Angularissa importataan, sekä exportataan moduuleja hyödyntämällä webpackin import/export:a. Tämä tekee 
 * applikaation hallinnasta helpompaa, sillä koko ohjelma ei ole kirjoitettu yhteen tiedostoon. Lisäksi modulaarisempi rakenne
 * ohittaa klassisen html/js - ongelman, jossa eri js - tiedostojen linkkaaminen html - tiedostoon väärässä järjestyksessä aiheutti 
 * mahdollisesti ongelmia koodin ajamisessa. Webpack myös tekee applikaation deployauksesta helpompaa, sillä webpack bundlaa eri
 * tiedostot yhteen, samalla suojaten applikaation nimiavaruutta. 
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

/**
 * @Component on dekoraattori. Dekoraattoreiden avulla voidaan antaa luokille, sekä metodeille uusia ominaisuuksia ilman 
 * niiden muokkaamista suoraan. 
 * Yksi yleinen käyttötapa on tehdä luokan arvoista muuttumattomia (descriptor.writable = false). Angularissa dekoraattoreilla määritetään 
 * luoduille komponenteille selector, templateUrl, sekä styleUrl - arvot. Nämä arvot menevät Component - funktioon, joka on Angularin
 * coressa sijaitseva wrapper - funktio. 
 * 
 * selectorin avulla voimme hyödyntää exportattua komponenttia DOM - elementtinä app.component.html - tiedostossa.
 * 
 * styleUrls mahdollistaa jokaiselle komponentille oman spesifioidun CSS - tiedoston asettamisen, mikä tekee tyylitiedostojen 
 * ylläpitämisestä helpompaa isommissa projekteissa. Angularissa voi myös ottaa käyttöön koko applikaation kattavat globaalit tyylit 
 * hyödyntämällä applikaation juureen luotua styles.css - tiedostoa. 
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
