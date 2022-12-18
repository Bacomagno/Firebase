import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-identification-type',
  templateUrl: './create-identification-type.component.html',
  styleUrls: ['./create-identification-type.component.scss']
})
export class CreateIdentificationTypeComponent implements OnInit {
  addIdType: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addIdType = this.formBuilder.group({
      idtype:['',[Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  send(){
    console.log('atras')
  }
}
