import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatOption } from '@angular/material/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 import { MatChipsModule} from '@angular/material/chips';
 import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
 import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioButton,
    MatIcon,
    MatRadioGroup,
    MatMenuModule,
    MatDivider,
    MatTooltipModule,
    MatBadgeModule,
    MatOption,
    MatAutocomplete,
    MatChipsModule,
    MatLabel,
    MatFormField,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioButton,
    MatRadioGroup,
    MatMenuModule,
    MatDivider,
    MatTooltipModule,
    MatIcon,
    MatBadgeModule,
    MatOption,
    MatAutocomplete,
    MatChipsModule,
    MatLabel,
    MatFormField,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatDialogModule,
    ]
})
export class MaterialModule { }
