import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input () textDecoration?: string;
  constructor(private elm: ElementRef) { 

  }
  ngOnInit(): void{
  }
  @HostListener("mouseover") onHover(btn:any){
    this.textDecoration = "underline"
  }

}
