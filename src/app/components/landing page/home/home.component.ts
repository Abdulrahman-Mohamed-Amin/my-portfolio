import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // المسار الصحيح للملف
    link.download = 'CV.pdf'; // اسم الملف عند التحميل
    link.click();
  }
}
