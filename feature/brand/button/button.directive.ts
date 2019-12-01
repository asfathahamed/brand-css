import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[brandButton], button[brandButtonSmall], a[brandButton], a[brandButtonSmall]',
  host: {
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled.toString()',
    '(click)': '_haltDisabledEvents($event)'
  },
  inputs: ['disabled'],
})
export class ButtonDirective {
  @Input() brandButtonSmall;
  disabled = false;
  
  constructor(private el: ElementRef, renderer: Renderer2) {
    
      renderer.addClass(el.nativeElement, this._hasHostAttributes('brandButtonSmall') ? 'btn-stnd-small': 'btn-stnd-medium');
      // this.disabled = this._hasHostAttributes('disabled');
      // if (this.disabled) {
      //   renderer.addClass(el.nativeElement,  'disabled');
      // }
  }

  private _getHostElement() {
    return this.el.nativeElement;
  }

  private _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  _haltDisabledEvents(event: Event) {
    console.log(this.disabled);
    if (this.disabled) {
      console.log('this button disabled');
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

}
