import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form;
  formHeader;
  formComponentArr: string[];

  constructor(
    private formBuilderService: FormBuilderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formBuilderService.getForm().then(res => {
      this.form = res.data.formComponents;
      this.formHeader = res.data.formHeader;


      console.log('form', this.form);
      console.log('formHeader', this.formHeader)
    });
  }

  editForm() {
    console.log('click');
    this.router.navigate(['/formtest']); // Bind the url in Array
  }

}
