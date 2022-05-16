import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Personas } from '../interfaces/personas.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas!: Personas;

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.personasService.getPersonas().subscribe( (personas) => {
    this.personas = personas;
    this.personasService.personas = personas;
    });
  }

}
