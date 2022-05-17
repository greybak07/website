import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  @ViewChild('cursorDefault') cursor!: ElementRef;
  @ViewChild('cursorDefaultDelay') cursorDelay!: ElementRef;

  constructor(private _render: Renderer2) {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.cursor.nativeElement.setAttribute("style", `top:${e.pageY - 6.5}px; left: ${e.pageX - 6.5}px`);
    this.cursorDelay.nativeElement.setAttribute("style", `top:${e.pageY + 13}px; left: ${e.pageX + 13}px`);
  }

  @HostListener('document:mousedown') onMouseDown(e: Event) {
    console.log("click");
    this._render.addClass(this.cursor.nativeElement, "mouse-click");
    this._render.addClass(this.cursorDelay.nativeElement, "mouse-click");
  }

  @HostListener('document:mouseup') onMouseUp(e: Event) {
    console.log("up");
    this._render.removeClass(this.cursor.nativeElement, "mouse-click");
    this._render.removeClass(this.cursorDelay.nativeElement, "mouse-click");
  }

  ngOnInit(): void {
  }


}
