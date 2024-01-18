import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-route.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
      AppRoutingModule,
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}