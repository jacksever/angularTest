import {HttpClient} from '@angular/common/http';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  public currentCount: number;
  public httpClient: HttpClient;
  public baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;

    http.get<number>(baseUrl + 'counter/get').subscribe(result => {
      this.currentCount = result;
    }, error => console.error(error));
  }

  public incrementCounter() {
    this.httpClient.get<number>(this.baseUrl + 'counter/increment/' + this.currentCount.toString()).subscribe(result => {
      this.currentCount = result;
    }, error => console.error(error));
  }

  public decrementCounter() {
    this.httpClient.get<number>(this.baseUrl + 'counter/decrement/' + this.currentCount.toString()).subscribe(result => {
      this.currentCount = result;
    }, error => console.error(error));
  }
}
