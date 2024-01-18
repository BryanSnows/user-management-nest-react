import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { loginRoute } from "./login.route";
import { SignInComponent } from "./sign-in/sign-in.component";

@NgModule({
    declarations:[LoginComponent,  SignInComponent],
    imports: [CommonModule, RouterModule.forChild(loginRoute)],
    providers:[]
})

export class LoginModule {}