import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';


// Components
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionTreeComponent } from './section-tree/section-tree.component';
import { SectionFourComponent } from './section-four/section-four.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionTreeComponent,
    SectionFourComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule

  ]
})
export class HomeModule { }
