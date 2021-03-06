import {Component} from '@angular/core';

@Component({
  selector: '<%- componentName %>',
  template: `
    <div>
      <h2>{{text}}</h2>
    </div>
  `
})
export class <%- className %> {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}
