import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-route.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}