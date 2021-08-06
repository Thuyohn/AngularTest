import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableTestService {
  testObservable : BehaviorSubject <string> = new BehaviorSubject("");

  constructor() { }

  updateTestObservable(value : string) : void {
    this.testObservable.next(value);
  }

  testObservableFunction() : Observable<any>{

    return new BehaviorSubject("From function");

  }
}
