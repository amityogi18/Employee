import { Employee } from './domain/employee';
import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash';

@Pipe({name: 'searchPipeFilter'})
export class SearchPipeFilter implements PipeTransform {
    transform(employee: Employee[], searchText: string) {
        if(_.isEmpty(searchText) || _.isNull(searchText)) return employee;

        return _.filter(employee, ['name', searchText]);
    }
}