import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


const modules = [
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatCardModule,
  MatExpansionModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
