import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @ViewChildren('progressContainer') progressContainers!: QueryList<ElementRef>;

  skills = [
    { name: 'HTML', progress: 90, color: '#fff', image: 'assets/icons/1.png' ,fade:"fade-left"},
    { name: 'CSS', progress: 90, color: '#fff', image: 'assets/icons/2.png'  ,fade:"fade-up"},
    { name: 'Bootstrap', progress: 85, color: '#fff', image: 'assets/icons/3.png' ,fade:"fade-down" },
    { name: 'tailwind', progress: 85, color: '#fff', image: 'assets/icons/4.png'  ,fade:"fade-right"},
    { name: 'JavaScript', progress: 80, color: '#fff', image: 'assets/icons/5.png'  ,fade:"fade-left"},
    { name: 'typescript', progress: 80, color: '#fff', image: 'assets/icons/6.png'  ,fade:"fade-up"},
    { name: 'sass', progress: 70, color: '#fff', image: 'assets/icons/7.png' ,fade:"fade-down" },
    { name: 'angular', progress: 70, color: '#fff', image: 'assets/icons/8.png'  ,fade:"fade-right"},
    { name: 'figma', progress: 75, color: '#fff', image: 'assets/icons/9.png' ,fade:"fade-up" },
    { name: 'git', progress: 70, color: '#fff', image: 'assets/icons/10.png'  ,fade:"fade-down"},
    { name: 'github', progress: 70, color: '#fff', image: 'assets/icons/11.png' ,fade:"fade-up" },
  ];

  ngAfterViewInit() {
    this.progressContainers.forEach((container, index) => {
      new ProgressBar.Circle(container.nativeElement, {
        strokeWidth: 3,
        color: this.skills[index].color,
        trailColor: 'transparent',
        trailWidth: 2,
        duration: 2400,
        from: { color: '#FFF', width: 1 },
        to: { color: '#fff', width: 2 },
        text: {
          value: '',
          autoStyleContainer: false
        },
        step: (state:any, circle:any) => {
          circle.path.setAttribute('stroke', state.color);
          const value = Math.round(circle.value() * 100);
          circle.setText(`
            <div class="d-flex justify-content-between align-items-center gap-2 flex-column">
              <img src="${this.skills[index].image}" alt="${this.skills[index].name}" width="50">
              <p class="text-uppercase skill">${this.skills[index].name}</p>
            </div>
          `);
        }
      }).animate(this.skills[index].progress / 100);
    });
  }


}
