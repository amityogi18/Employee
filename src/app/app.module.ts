import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UtilityService } from './utility.service';
import { SearchPipeFilter } from './search-pipe-filter';
import { SortByField } from './sort-by-field';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    SearchPipeFilter,
    SortByField,
    EditEmployeeComponent
  ],  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'edit',
        component: EditEmployeeComponent
      }
    ])
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
