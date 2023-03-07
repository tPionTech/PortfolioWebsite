import { Component } from '@angular/core';
import { CareerComponent } from '../career/career.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  NavigateHome() {
    document.getElementById("homeSection")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  NavigateCareer() {
    document.getElementById("careerSection")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  NavigatePortfolio() {
    document.getElementById("portfolioSection")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  NavigateContact() {
    document.getElementById("contactSection")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
