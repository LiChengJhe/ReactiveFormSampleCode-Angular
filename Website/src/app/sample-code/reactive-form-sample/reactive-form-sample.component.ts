import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.css']
})
export class ReactiveFormSampleComponent implements OnInit {
  Form: FormGroup;
  FormContent: string;
  Items: any;
  constructor() { }
  ngOnInit() {
    this.Form = new FormGroup({
      OrderID: new FormControl(null),
      Items: new FormArray([this.CreateItem()]),
    });

  }
  
  AddItem(): void {
    this.Items = this.Form.controls['Items'];
    this.Items.push(this.CreateItem());
    console.log(this.Items);
  }
  
  CreateItem(): FormGroup {
    return new FormGroup({
      ItemName: new FormControl(null),
      Price: new FormControl(null),
      Quantity: new FormControl(null)
    });
  }

  OnSubmit() {
    this.FormContent = JSON.stringify(this.Form.value);
  }

  TrackByFn(index, item) {
  console.log(index, item);
    return index;
  }
}
