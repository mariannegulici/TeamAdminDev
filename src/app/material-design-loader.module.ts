import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdGridListModule,
    MdListModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdDatepickerModule,
    MdNativeDateModule
 } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdMenuModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        MdGridListModule,
        MdListModule,
        MdTooltipModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,
        MdSlideToggleModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdMenuModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        MdGridListModule,
        MdListModule,
        MdTooltipModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,
        MdSlideToggleModule,
        MdDatepickerModule,
        MdNativeDateModule
    ]
})
export class MaterialDesignLoaderModule {}