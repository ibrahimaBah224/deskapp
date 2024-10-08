import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./shared/side-bar/side-bar.component";
import {TopBarComponent} from "./shared/top-bar/top-bar.component";
import {FooterComponent} from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, TopBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Biblio';
}
