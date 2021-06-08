import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'form', component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
