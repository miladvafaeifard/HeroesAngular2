import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/styles/hero-detail.component.css'],
    templateUrl: 'app/templates/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private routerParams: RouteParams,
        private heroService: HeroService){

    }

    ngOnInit() {
        let id = +this.routerParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}