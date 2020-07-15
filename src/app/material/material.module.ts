import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatRadioModule, MatDividerModule, MatGridListModule],
  exports: [MatButtonModule, MatCardModule, MatRadioModule, MatDividerModule, MatGridListModule],
})
export class MaterialModule {}
