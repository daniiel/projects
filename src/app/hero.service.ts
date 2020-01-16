import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is
  //  injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
