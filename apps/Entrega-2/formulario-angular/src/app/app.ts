import { Component } from '@angular/core';
import { RegistroComponent } from './registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}