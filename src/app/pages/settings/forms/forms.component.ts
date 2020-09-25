import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  acceptingApplicants = true;

  constructor(
    public formBuilderService: FormBuilderService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  editForm() {
    this.router.navigate(['/formtest']);
  }

}
