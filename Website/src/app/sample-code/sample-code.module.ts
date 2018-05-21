import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SampleCodeRoutingModule } from './sample-code-routing.module';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SampleCodeRoutingModule
  ],
  declarations: [ReactiveFormSampleComponent],
  exports: [ReactiveFormSampleComponent]
})
export class SampleCodeModule { }
