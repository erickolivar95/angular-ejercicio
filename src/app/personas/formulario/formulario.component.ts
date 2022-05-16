import { Component, OnInit } from '@angular/core';
import { Persona, Personas } from '../interfaces/personas.interface';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string = '';
  personas!: Personas;
  persona: Persona = {
    nombre:    '',
    edad:      0,
    sexo:      'hombre',
    documento: ''
  };


  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }


  buscar() {
    this.personas = this.personasService.personas;
    let condicion = true;

    for(let persona of this.personas.results) {
      if(persona.persona.nombre.toLowerCase() === this.nombre.toLowerCase()) {
        condicion = false;
        this.persona = {...persona.persona};
        break;
      }
    }

    if(condicion) {
      this.persona.id = undefined;
      this.persona.nombre = this.nombre;
      localStorage.setItem('persona', JSON.stringify(this.persona)); //guarda en el localStorage (almacenamiento local) del navegador si el nombre no existe en los resultados del api
    }
    
    
  }

}
