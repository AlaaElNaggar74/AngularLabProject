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
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { InputChildComponent } from './todo/input-child/input-child.component';
import { DisplayChildComponent } from './todo/display-child/display-child.component';
import { FormsModule } from '@angular/forms';

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
    ChildPortfolioComponent,
    HomeComponent,
    TodoComponent,
    InputChildComponent,
    DisplayChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
