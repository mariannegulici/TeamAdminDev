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
    MdListModule
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
        MdListModule
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
        MdListModule
    ]
})
export class MaterialDesignLoaderModule {}