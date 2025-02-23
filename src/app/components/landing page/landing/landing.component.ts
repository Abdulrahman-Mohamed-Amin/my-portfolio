import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { MyServicesComponent } from "../my-services/my-services.component";
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, HomeComponent, AboutComponent, SkillsComponent, MyServicesComponent, PortfolioComponent, ContactComponent , FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
