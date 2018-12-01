import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { BackendComponent } from "./components/backend/backend.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { FrontendComponent } from "./components/frontend/frontend.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "portfolio", component: PortfolioComponent },
  { path: "frontend", component: FrontendComponent },
  { path: "backend", component: BackendComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
