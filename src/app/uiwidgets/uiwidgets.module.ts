import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { FactAreaComponent } from './components/fact-area/fact-area.component';
import { FeatureAreaComponent } from './components/feature-area/feature-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppSampleComponent } from './components/app-sample/app-sample.component';
import { CompanySectionComponent } from './components/company-section/company-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeroComponent, 
    FactAreaComponent, 
    FeatureAreaComponent, 
    FooterComponent, 
    AppSampleComponent, 
    CompanySectionComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports : [
    HeroComponent,
    FactAreaComponent,
    FeatureAreaComponent,
    FooterComponent,
    AppSampleComponent,
    CompanySectionComponent,
    NavbarComponent,
    HomeComponent 
  ]
})
export class UIwidgetsModule { }
