import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.css']
})
export class ReactiveFormSampleComponent implements OnInit {
  form: FormGroup;
  formContent: string;
  suppliers: any;
  constructor() { }
  ngOnInit() {
    this.form = new FormGroup({
      user: new FormControl(null),
      suppliers: new FormArray([this.CreateSupplier()]),
    });

  }
  
  AddSupplier(): void {
    this.suppliers = this.form.controls['suppliers'];
    this.suppliers.push(this.CreateSupplier());
    console.log(this.suppliers);
  }
  
  CreateSupplier(): FormGroup {
    return new FormGroup({
      company: new FormControl(null),
      address: new FormControl(null),
      phone: new FormControl(null)
    });
  }

  OnSubmit() {
    this.formContent = JSON.stringify(this.form.value);
  }

  TrackByFn(index, item) {
    return index; // or item.id
  }
}
