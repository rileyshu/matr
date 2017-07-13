import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildErs` component loaded asynchronously');

@Component({
  selector: 'child-ers',
  template: `
    <h1>Hello from Child Ers</h1>    
  `,
})
export class ChildErsComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildErs` component');
  }

}
