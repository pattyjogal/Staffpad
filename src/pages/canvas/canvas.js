var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
export var NoteCanvas = (function () {
    function NoteCanvas() {
    }
    NoteCanvas.prototype.ngOnInit = function () {
    };
    NoteCanvas.prototype.ngAfterViewInit = function () {
        var p = this.noteCanvas.nativeElement.parentNode.parentNode;
        console.log('Parent node');
        console.log(p);
        var cs = getComputedStyle(p);
        var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
        var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
        // Element width and height minus padding and border
        var pWidth = p.offsetWidth - paddingX - borderX - 32;
        var pHeight = p.offsetHeight - paddingY - borderY;
        this.x = pWidth;
        this.y = pHeight;
        var canvas = this.noteCanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        for (var i = -2; i < 3; i++) {
            var y = (500 / 2) + (i * 75);
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.moveTo(0, y);
            ctx.lineTo(500, y);
            ctx.stroke();
            console.dir(ctx);
        }
    };
    __decorate([
        ViewChild("noteCanvas"), 
        __metadata('design:type', ElementRef)
    ], NoteCanvas.prototype, "noteCanvas", void 0);
    NoteCanvas = __decorate([
        Component({
            selector: 'note-canvas',
            template: "\n    <canvas #noteCanvas\n    [attr.width]='x'\n    [attr.height]='y'>\n    </canvas>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCanvas);
    return NoteCanvas;
}());
//# sourceMappingURL=canvas.js.map