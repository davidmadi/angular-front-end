<<<<<<< HEAD
import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngbd-progressbar',
  templateUrl: './progressbar.component.html',
  providers: [NgbProgressbarConfig]
})
export class NgbdpregressbarBasicComponent {
  height = '20px';

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
=======
import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngbd-progressbar',
  templateUrl: './progressbar.component.html',
  providers: [NgbProgressbarConfig]
})
export class NgbdpregressbarBasicComponent {
  height = '20px';

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
>>>>>>> 88b567abdb510c7407784053c07511f9f7312bc5
