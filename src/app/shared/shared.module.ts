import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';

const modules = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatChipsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTreeModule
];

const components = [
    ConfirmDialogComponent,
    LoaderComponent
];
@NgModule({
    declarations: [...components],

    imports: [...modules],

    exports: [
        ...modules,
        ...components
    ],
    providers: [],
    entryComponents: [ConfirmDialogComponent]

})
export class SharedModule { }
