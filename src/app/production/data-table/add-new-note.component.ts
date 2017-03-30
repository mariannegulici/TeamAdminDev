import { Component } from "@angular/core";
import { MdDialogRef } from "@angular/material";

@Component({
    selector: 'add-new-note-dialog',
    templateUrl: 'add-new-note.component.html',
    styleUrls: ['add-new-note.component.css'],
})
export class AddNewNote {

    public editorOptions: Object = { 
        placeholderText: 'Add text for new note here!',
        charCounterCount: false,
        toolbarButtons: ['undo', 'redo', '|' , 'bold', 'italic', 'underline', '|', 'color', 'formatOL', 'formatUL', 'clearFormatting'],
        toolbarButtonsMD: ['undo', 'redo', '|' , 'bold', 'italic', 'underline', '|', 'color', 'formatOL', 'formatUL', 'clearFormatting'],
        toolbarButtonsSM: ['undo', 'redo', '|' , 'bold', 'italic', 'underline', '|', 'color', 'formatOL', 'formatUL', 'clearFormatting'],
        height: 400,
        codeMirror: false,
        colorsDefaultTab: 'background',
        dragInline: false,
        spellcheck: false,
        requestWithCORS: false,
        pluginsEnabled: ['colors','lists']
    }
    public editorContent: any;

    constructor(public dialogRef: MdDialogRef<AddNewNote>){}

    discardCloseDialog() {
        this.dialogRef.close('Dialog closed!');
    }

    saveNote() {
        this.dialogRef.close(this.editorContent);
    }

}