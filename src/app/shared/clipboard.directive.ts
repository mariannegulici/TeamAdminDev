import { Directive, ElementRef } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { MdSnackBar } from '@angular/material';

// Import the application components and services.
import { ClipboardService } from "./clipboard.service";

// This directive acts as a simple glue layer between the given [clipboard] property
// and the underlying ClipboardService. Upon the (click) event, the [clipboard] value
// will be copied to the ClipboardService and a (clipboardCopy) event will be emitted.
@Directive({
    selector: "[clipboard]",
    inputs: [ "executeDirective: clipboard" ],
    outputs: [
        "copyEvent: clipboardCopy",
        "errorEvent: clipboardError"
    ],
    host: {
        "(click)": "copyToClipboard()"
    }
})
export class ClipboardDirective {

    public copyEvent: EventEmitter<string>;
    public errorEvent: EventEmitter<Error>;
    public value: string;
    private executeDirective: Boolean;

    // I initialize the clipboard directive.
    constructor( private clipboardService: ClipboardService, private elementRef: ElementRef, private mdSnackBar: MdSnackBar ) {
        this.copyEvent = new EventEmitter();
        this.errorEvent = new EventEmitter();
    }

    // I copy the value-input to the Clipboard. Emits success or error event.
    public copyToClipboard() : void {
        console.log(this.executeDirective);
        if (this.executeDirective) {
            this.value = this.elementRef.nativeElement.innerText;
            this.clipboardService
                .copy( this.value )
                .then(
                    ( value: string ) : void => {
                        this.copyEvent.emit( value );
                        this.mdSnackBar.open(`" ${this.value} " copied to clipboard !`,'',{
                            duration: 2000
                        });
                    }
                )
                .catch(
                    ( error: Error ) : void => {
                        this.errorEvent.emit( error );
                    }
                );
        }
    }

}