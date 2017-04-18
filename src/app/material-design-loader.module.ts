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
    MdProgressSpinnerModule
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
        MdProgressSpinnerModule
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
        MdProgressSpinnerModule
    ]
})
export class MaterialDesignLoaderModule {}