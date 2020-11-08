import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingexaple',
  template: `
  <div class="container">
  <h2>{{name}}</h2>
  <h4 [style.color]="showhide?'red':'green'"> {{myWeb}} </h4>
  <hr/>
  <button [style.font-size.em]="isSpecial ? 3 : 1" >Submit</button>
  <hr/>
  <button [style.font-size.%]="!isSpecial ? 150 : 50" >Submit</button>
  </div>
  `,
  styles: [``]
})
export class DatabindingexapleComponent implements OnInit {
  constructor() { }
  public name:string = "Style binding";
  public showhide = true;
  public isSpecial = false;
  public myWeb:string = "paraspurwar.com";
  public bindingName:string = "Style binding";
  
  ngOnInit() {
  }

}
