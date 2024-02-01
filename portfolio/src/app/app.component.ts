import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'Daniel Aguiar';
  
  constructor() {
    this.title = this.title.replace(/(\w+)\s(\w+)/, '$1');
  }

  ngOnInit() {
    // const title = document.querySelector('.title');
    // title && (title.innerHTML = this.title);
  }

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public navigation(event: any): void {
    event.preventDefault();

    const item = event.target.closest('a[routerLink^="#"]');
    const target = event.target.getAttribute('routerLink');

    if (item && target) {
      const targetElement = document.querySelector(target);
      targetElement && targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public functions(element: any): void {
    const textArray = element.innerHtml.split('');
    element.innerHtml = '';
    textArray.forEach((letter: string, index: number) => {
      setTimeout(() => {
        element.innerHtml += letter;
      }, 75 * index);
    });
  }

  public scroll(): void {
    const element = document.querySelector('#about');
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
