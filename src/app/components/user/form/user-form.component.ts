import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/app/shared/services/generic.service';


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    public user: any = {};
    public userId: any;
    public pageType: string;
    public fg: FormGroup;
    public gender = ['Male', 'Female'];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private genericService: GenericService,
    ) {
        this.pageType = route.data['value'].act;
        this.userId = this.route.snapshot.params.id;
    }


    private initializeFormGroup(): FormGroup {
        return this.formBuilder.group({
            name: [null, Validators.required],
            cnic: [null, Validators.required],
            dateOfBirth: [null, Validators.required],
            emailId: [null, Validators.required],
            gender: [null, Validators.required],
            contactNumber: [null, Validators.required],
        });
    }

    ngOnInit(): void {
        this.fg = this.initializeFormGroup();
        if (this.pageType !== 'create') {
            this.getData(this.userId);
        }
    }

    getData(id): void {
        this.genericService.get(`findUser/${id}`).subscribe((user: any) => {

            this.user = user;
            this.fg.patchValue(this.user);
            if (this.pageType === 'view') {
                this.fg.disable();
            } else {
                this.fg.get('emailId').disable();
            }
        }, (error) => {

            console.error(error);

        });
    }


    public saveData(item): void {
        if (this.pageType === 'update') {
            this.update(item);
        } else if (this.pageType === 'create') {
            this.create(item);
        }
    }

    public update(item): void {

        this.genericService.put(`updateUser/${this.userId}`, item).subscribe((res: any) => {
            if (!res.error) {

                this.router.navigate(['/users']);

            }
        }, (error) => {

            console.error(error);
        });
    }

    create(item): void {
        this.genericService.post(`createUser`, item).subscribe((res: any) => {
            if (!res.error) {
                this.router.navigate(['/users']);
            }
        }, (error) => {
            console.error(error);

        });
    }

}
