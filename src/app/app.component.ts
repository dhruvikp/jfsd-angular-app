import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'jfsd-angular-app';
  items: string[];

  currentTime : string;

  ngOnInit(): void {
    this.loadItems();
    const timerObservable: Observable<number> = interval(5000);

  

    timerObservable.subscribe(
      {
        next: (value: number) => this.currentTime = new Date().toLocaleTimeString(),
        error: (error) => console.log('Error occurred!'),
        complete: ()=> console.log('Complete invoked')
      }
    );
    

  }

  constructor(private dataService: DataService, private httpClient: HttpClient) {}
   

  loadItems(): void  {
    this.dataService.getItems().subscribe(
      {
        next: (data) => this.items = data,
        error: (error) => console.error('Error while fetching data..')
      }
    );
  }

  addItem(): void {
    const newItem = `Item ${this.items.length+1}`;

    this.dataService.addItem(newItem).subscribe({
      next: () => this.loadItems(),
      complete: () => console.log('Complete is invoked'),
      error: (error) => console.error('Error occurred')
    })
  }

  clearItems(): void {
    this.dataService.clearItems();
    this.items = [];
  }

// HTTP related logic

}
