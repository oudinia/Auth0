import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
