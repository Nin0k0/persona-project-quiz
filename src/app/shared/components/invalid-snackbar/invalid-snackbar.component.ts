import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-invalid-snackbar',
  templateUrl: './invalid-snackbar.component.html',
  styleUrls: ['./invalid-snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InvalidSnackbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
