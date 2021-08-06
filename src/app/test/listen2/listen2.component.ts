import { Component, OnInit } from '@angular/core';
import { ObservableTestService } from 'src/app/services/observable-test.service';

@Component({
  selector: 'app-listen2',
  templateUrl: './listen2.component.html',
  styleUrls: ['./listen2.component.scss']
})
export class Listen2Component implements OnInit {
  output1 : string = "";
  output2 : string = "";

  constructor(
    private test : ObservableTestService

  ) { }

  ngOnInit(): void {
    this.test.testObservable.subscribe(value => {
      this.output1 = value;
    })

    setTimeout(()=>{
      this.test.testObservableFunction().subscribe(value => {
        this.output2 =  value;
      })
    }, 5000)
  }

}
