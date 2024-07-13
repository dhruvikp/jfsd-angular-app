import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor() { }

  getItems(): Observable<string[]> {
    return of(this.items)
  }

  addItem(item: string): Observable<void> {
    
    return new Observable<void>(

      (observer) => {
        this.items.push(item);
        observer.next(); // Notify observers next handler
        observer.complete(); // notify observers complete handler
      }

    )
    
    this.items.push(item);
  }

  clearItems(): void {
    this.items = [];
  }
}
