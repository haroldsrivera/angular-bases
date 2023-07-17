import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component";

// es necesario exportar el component para porderlo utilizar en otros scripts
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
