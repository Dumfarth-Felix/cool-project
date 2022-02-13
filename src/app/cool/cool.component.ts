import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cool',
  templateUrl: './cool.component.html',
  styleUrls: ['./cool.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CoolComponent implements OnInit {
  @Input() text = "Standard Text";
  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(number: number) {
    this.output.emit('Ich habe Knopf '+ number + ' gedrückt :)')
  }
}



