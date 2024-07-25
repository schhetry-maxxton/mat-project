import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from './shared/material.module';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { DialogComponent } from './dialog/dialog.component';
import { TreeComponent } from './tree/tree.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
// import { Event } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    TooltipComponent,
    BadgeComponent,
    ChipsComponent,
    CardComponent,
    TreeComponent,
    SlideToggleComponent,
    ProgressSpinnerComponent,
    DialogComponent,
    DialogExampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
