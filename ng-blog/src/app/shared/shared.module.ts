import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule

  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
