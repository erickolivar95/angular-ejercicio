import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  _personas!: Personas;

  apiKey: string = '9XLT-R11V-ECBS-TXIH';
  refID: string = '4yo6hkjn';


  set personas(personas: Personas) {
    this._personas = {...personas};
  }

  get personas(): Personas {
    return {...this._personas};
  }

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Personas> {
    /*
      La siguiente api fue contruida con base en el siguiente codigo:
        var faker = require('faker'); // Faker.js
        const arregloSexo = ['hombre', 'mujer'];

        api.persona  = {
        id:    random.special(4, 8),
        nombre:  faker.name.findName(),
        edad: random.numeric(18, 60),
        sexo: arregloSexo[ random.numeric(0,1) ],
        documento: ''
        };
    */

    const queryParams = new HttpParams().set('key', this.apiKey).set('results', '4')

    return this.http.get<Personas>(`https://randomapi.com/api/${ this.refID }`, { params: queryParams });
  }
}
