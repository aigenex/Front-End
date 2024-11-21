import { Component, OnInit } from '@angular/core';
import { ImportsModule } from 'src/app/imports';
import { Customer } from 'src/app/pages/domain/customer';
import { CustomerService } from 'src/app/services/customerservice';
@Component({
    selector: 'app-table-stateful',
    templateUrl: 'table-stateful.component.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [CustomerService]
})
export class TableStateful implements OnInit{
    customers!: Customer[];

    selectedCustomers!: Customer;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMini().then((data) => (this.customers = data));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}