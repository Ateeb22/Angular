import { Component } from '@angular/core';

@Component({
  selector: 'app-both',
  standalone: true,
  imports: [],
  template: `
    <p class="major">
     What a component this is 
    </p>
  `,
  styles: `.major{color:green}`
})
export class BothComponent {

}
