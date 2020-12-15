import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'discovery-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit(): void {
  }

}
