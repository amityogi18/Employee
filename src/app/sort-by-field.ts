import { Employee } from './domain/employee';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'sortByField'})
export class SortByField implements PipeTransform{
    transform (employee: Employee[], searchField: string) {
        if(_.isEmpty(searchField) || _.isNull(searchField)) return employee;

        return _.sortBy(employee, [ searchField ]);
    }
}