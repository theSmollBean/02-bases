import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ], //exponer el modulo al exterior para
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
