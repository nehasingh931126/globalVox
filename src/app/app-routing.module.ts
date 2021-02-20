import { AppComponent} from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListingSectionComponent } from './listing-section/listing-section.component';
const routes: Routes = [
  {path: "projectKarona", component : FormComponent},
  {path: "listingSection", component : ListingSectionComponent},
  {path: '**', redirectTo: "listingSection"} // WildCard Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
