import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'note-canvas',
    templateUrl: 'canvas.html'
})


export class NoteCanvas {

    ys = [0, 400]

    @ViewChild("noteCanvas") noteCanvas: ElementRef;

    constructor() {

    }

    ngAfterViewInit() {
        console.log(this.noteCanvas.nativeElement.scrollHeight)

        innerHeight = this.noteCanvas.nativeElement.scrollHeight

        this.ys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (x) { return x * innerHeight / 9 + 15} )

    }
    

}