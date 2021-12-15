import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  private map = new Map<string, string[]>([
    ['Poland', ['Warszawa', 'Krakow']],
    ['USA', ['New York', 'Austin']],
  ])

  country: string;
  city: string;

  get countries(): string[] {
    return Array.from(this.map.keys());
  }

  get cities(): string[] | undefined {
    return this.map.get(this.country);
  }

}
