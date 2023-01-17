import { KeyboardManagerItemDirectives } from './keyboard-manager-item.directives';
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

@Directive({
  selector: '[appKm]'
})

export class KeyboardManagerDirectives {

  @ContentChildren(KeyboardManagerItemDirectives) public items: QueryList<KeyboardManagerItemDirectives> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        console.log('up');
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        console.log('down');
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        console.log('left');
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        console.log('right');
        break;
    }
  }

  public moveFocus(directon: ArrowDirection): KeyboardManagerItemDirectives {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + directon];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return directon === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
