import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';

const routes: Routes = [
  {
    path: 'SampleCode',
      children: [
        { path: 'ReactiveForm', component: ReactiveFormSampleComponent }
    ]
  },
  { path: '', redirectTo: '/SampleCode/ReactiveForm', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleCodeRoutingModule { }
