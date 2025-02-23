import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore from 'swiper'
import { Navigation , Pagination} from 'swiper/modules'; // ✅ استيراد Navigation بشكل صحيح

// تفعيل النافيقيشن
SwiperCore.use([Navigation , Pagination]);


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    new Swiper('.swiper-container', {
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
      },
      breakpoints:{
        1100:{
          slidesPerView:4
        },
        990:{
          slidesPerView:3
        },
        600:{
          slidesPerView:2
        },
        400:{
          slidesPerView:1
        }
      },
      spaceBetween:20,
      autoplay:{
        delay:1000
      },
      loop: true

    });
  }
}
