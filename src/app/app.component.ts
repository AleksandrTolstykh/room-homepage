import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "room-homepage";
  mobile: boolean = false;
  showMenu: boolean = false;
  titleList: string[] = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
  ];
  contentList: string[] = [
    `We provide unmatched quality, comfort, and style for property owners across the country.
      Our experts combine form and function in bringing your vision to life. Create a room in your
      own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business.
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
      store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
      to ensure that every product is made as perfect and as consistent as possible. With three decades of
      experience in this industry, we understand what customers want for their home and office.`
  ];
  selectedItem: number = 0;

  ngOnInit(): void {
    this.mobile = (window.innerWidth <= 768) ? true : false;
  }

  onResize(event: any) {
    this.mobile = (event.target.innerWidth <= 768) ? true : false;
  }

  onClick(event: any) {
    this.showMenu = !this.showMenu;
  }

  moveBackward(event: any) {
    if (this.selectedItem === 0) {
      this.selectedItem = 2;
    } else {
      this.selectedItem--;
    }
  }

  moveForward(event: any) {
    if (this.selectedItem === 2) {
      this.selectedItem = 0;
    } else {
      this.selectedItem++;
    }
  }
}
