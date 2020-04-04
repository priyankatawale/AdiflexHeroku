
import { NgModule } from '@angular/core';

import{  MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';

// import {MatOptionModule} from '@angular/material/';

import {MatSelectModule} from '@angular/material/select';

import {MatGridListModule} from '@angular/material/grid-list';




  import { from } from 'rxjs';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
imports:[ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
  MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule, MatGridListModule,],
exports:[ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
  MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule,
    MatGridListModule,]
})
export class MaterialModule{}