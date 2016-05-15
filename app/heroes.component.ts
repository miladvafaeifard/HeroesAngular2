import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/styles/heroes.component.css'],
    templateUrl: 'app/templates/heroes.component.html',
    directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit , OnDestroy{
    heroes: Hero[];

    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService){

    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    ngOnDestroy(){
        console.log('app component is destroyed');
    }

    onSelect(hero: Hero) {
        console.log('hero: ', hero);
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}