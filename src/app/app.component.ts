import AOS from 'aos';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-portfilo';
  ngOnInit(): void {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
}
