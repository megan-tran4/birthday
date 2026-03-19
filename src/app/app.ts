import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cake } from "../components/cake/cake";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cake],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('birthday');
}
