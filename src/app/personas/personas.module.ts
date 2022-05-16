import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TablaComponent,
    FormularioComponent
  ]
})
export class PersonasModule { }
