<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  public checkboxGroupForm: FormGroup;

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  public checkboxGroupForm: FormGroup;

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
>>>>>>> 88b567abdb510c7407784053c07511f9f7312bc5
