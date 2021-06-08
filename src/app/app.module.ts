import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { TestComponent } from './test/test.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import {AtomSpinnerModule, BreedingRhombusSpinnerModule, FingerprintSpinnerModule, FlowerSpinnerModule, FulfillingBouncingCircleSpinnerModule, FulfillingSquareSpinnerModule, HalfCircleSpinnerModule, HollowDotsSpinnerModule, IntersectingCirclesSpinnerModule, OrbitSpinnerModule, PixelSpinnerModule, RadarSpinnerModule, ScalingSquaresSpinnerModule, SemipolarSpinnerModule, SpringSpinnerModule, SwappingSquaresSpinnerModule, TrinityRingsSpinnerModule} from 'angular-epic-spinners';

import { SpinnersComponent } from './spinners/spinners.component'
import { NewwebComponent } from './newweb/newweb.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListComponent,
    SpinnersComponent,
    NewwebComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
MatCardModule,
MatIconModule,
ReactiveFormsModule,
PasswordStrengthMeterModule,
RouterModule,
AtomSpinnerModule,
FlowerSpinnerModule,
PixelSpinnerModule,
HollowDotsSpinnerModule,
IntersectingCirclesSpinnerModule,
RadarSpinnerModule,
ScalingSquaresSpinnerModule,
HalfCircleSpinnerModule,
TrinityRingsSpinnerModule,
FulfillingSquareSpinnerModule,
// CirclesToRhombusesSpinnerModule,
SemipolarSpinnerModule,
// SelfBuildingSpinnerModule,
SwappingSquaresSpinnerModule,
FulfillingBouncingCircleSpinnerModule,
FingerprintSpinnerModule,
SpringSpinnerModule,
// AtomSpinnerModule,
// LoopingRhombusesSpinnerModule,
BreedingRhombusSpinnerModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
