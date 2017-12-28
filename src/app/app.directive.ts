import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
    selector: '[myColor]'
   }
 )
 export class changeColor{
 
   constructor(
     private el: ElementRef
   ){}
 
   @HostListener('mouseenter',['$event']) onMouseEnter(event: any) {

    // Identify class applied on hovered element
    const className = event.target.className;

    // Switch case is used to call function to apply respective text color
    // If class applied is "odd", text will be red; class applied is "green", text will be green.
    switch (className) {
        case 'odd':
          this.hover('red');
          break;
        case 'even':
          this.hover('green');
          break;
        default:
          this.hover(null);
          break;
      }
 }
 
//  Make text black when mouse leaves row
 @HostListener('mouseleave') onMouseLeave() {
    this.hover('black');
  }
 
//  Change color of text on hover, based on odd/even row
    private hover(changeColor: string) {
        this.el.nativeElement.style.color = changeColor;
      }
 }
