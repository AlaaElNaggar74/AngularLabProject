import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AbouteComponent } from './aboute/aboute.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildSkilComponent } from './skills/child-skil/child-skil.component';
import { ChildPortfolioComponent } from './portfolio/child-portfolio/child-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AbouteComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    NavbarComponent,
    ChildSkilComponent,
    ChildPortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
