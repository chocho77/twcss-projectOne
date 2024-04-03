import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twcss-projectOne';
  mainImageUrl = "assets/images/holographic-fluid-shape.avif";
  similarProductOneUrl = "assets/images/similarProductOne.avif";
  similarProductTwoUrl = "assets/images/similarProductTwo.avif";
  similarProductThreeUrl = "assets/images/similarProductThree.avif";
  similarProductFourUrl = "assets/images/similarProductFour.avif";
}
