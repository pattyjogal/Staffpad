import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'note-canvas',
    templateUrl: 'canvas.html'
})


export class NoteCanvas {

    dimensions: any;
    noteX = 0
    noteY = 0
    h = 0
    noteRX = 0
    noteRY = 0

    @ViewChild("noteCanvas") noteCanvas: ElementRef;

    constructor() {
        this.h = 0
        this.dimensions = []
    }

    ngAfterViewInit() {
        console.log(this.noteCanvas.nativeElement.scrollHeight)

        let h = this.noteCanvas.nativeElement.scrollHeight

        this.noteX = this.noteCanvas.nativeElement.scrollWidth / 2

        this.dimensions = this.range(0, 9, 1).map(function (x) { return [x * h / 9 + h / 18 , (x < 2 || x > 6) ? 50 : 2000]})

        this.h = h

    }

    clicked(event) {
        console.log(event.layerX)
        console.info(event.layerY)
        this.noteRY = this.h / 18
        this.noteRX = this.h / 18.
        this.noteX = event.layerX
        this.noteY = this.snapTo(event.layerY, this.h)


    }

    snapTo(noteY, h) {
        var distances = []
        for (var y of this.range(0, 9, .5).map(function (x) { return x * h / 9 + h / 18 })) {
            distances.push([Math.abs(noteY + this.h / 36 - y), y])
        }

        distances.sort(function (a, b) { return a[0] - b[0] })
        console.dir(distances)

        return distances[0][1]

    }

    range(start, stop, step) {

        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }

        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }

        return result;

    }
}  