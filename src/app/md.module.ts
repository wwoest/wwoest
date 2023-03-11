import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatNativeDateModule
  ]
})
export class MdModule { }
