import { Component,Input } from '@angular/core';
import { Hero } from "./hero";


@Component({
    selector: 'hero-detail',
    templateUrl:'component.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero//输入属性,接收来自主视图的selectedHero

}
