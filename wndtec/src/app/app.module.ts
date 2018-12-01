import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// RECOMMENDED
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { StartPageComponent } from "./components/start-page/start-page.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { FrontendComponent } from "./components/frontend/frontend.component";
import { BackendComponent } from "./components/backend/backend.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPageComponent,
    PortfolioComponent,
    FrontendComponent,
    BackendComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BsDropdownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
