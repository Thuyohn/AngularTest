import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservableTestService } from 'src/app/services/observable-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('testInput') testInput : ElementRef;

  output : string = "";
  outputObservable : BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private test : ObservableTestService

  ) { }

  ngOnInit(): void {

  }

  // ngOnInit(): void {
  //   this.outputObservable.subscribe(value => {
  //     this.output = value;
  //   });
  // }

  // triggerObservable() : void {
  //     var value = this.testInput.nativeElement.value;
  //     this.outputObservable.next(value);
  // }
  // triggerObservable2() : void {
  //   var value2 = this.testInput.nativeElement.value;

  //   this.test.testObservable.next(value2);
  // }
}
