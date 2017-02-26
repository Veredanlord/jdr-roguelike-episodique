import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable }     from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../class/hero'
@Injectable()

export class HeroesService{
  constructor(private http : Http){
  }
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://5.135.179.131/WS';
  
  getHeroes() : Promise<Hero[]> {
      const heroesUrl = `${this.url}/ListPersonnage.php`;
      return this.http.get(heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred (hero.service or API)', error);
    return Promise.reject(error.message || error);
  }
}
