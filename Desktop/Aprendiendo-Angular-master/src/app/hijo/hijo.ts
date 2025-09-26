import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html',
  styleUrls: ['./hijo.scss']
})
export class Hijo {
  @Input() tarea: string = "";
  @Output() tareaCompletada = new EventEmitter<void>();

  marcarComoCompletada() {
    this.tareaCompletada.emit();
  }
}
