import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Hero } from '../class/hero'
@Injectable()

export class HeroesService{
  constructor(private http : Http){
  }
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://5.135.179.131/WS';

  getHeroes (): Observable<Hero[]> {
    const heroesUrl = `${this.url}/ListPersonnage.php`;
    return this.http.get(heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  getHero(Id: number): Observable<Hero> {
    const heroUrl = `${this.url}/GetPersonnage.php`;
    const finalUrl = `${heroUrl}/${Id}`;
    return this.http.get(finalUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
