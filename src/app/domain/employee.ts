export class Employee {
            sno: number;
            name : string;
            phone_number : number;
            city : string;
            address : Address;
            
           constructor() {
                this.sno = 0 ;
                this.name = '';
                this.phone_number = 0 ;
                this.city = '';
                this.address = new Address() ;
                
           } 
}

export class Address {
    address_1 : string;
    address_2 : string;

    constructor() {
        this.address_1 ='';
        this.address_2 = '';
    }
};