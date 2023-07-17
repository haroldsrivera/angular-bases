import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  //properties
  public name: string = 'IronMan';
  public age: number = 45;

  //property GET
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  //metodo, al ser un metodo se llama de la siguiente forma: metodo() en el html
  getHeroDescription(): string{
    //concatenacion
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'spiderMan';
  }

  changeAge(): void{
    this.age = 18;
  }

  resetForm(): void{
    this.name = 'IronMan';
    this.age = 45;
  }
}
