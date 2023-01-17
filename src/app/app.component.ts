import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  public form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      yesNoAnswer: [{
        value: null ,
        disabled: true,
      }]
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
