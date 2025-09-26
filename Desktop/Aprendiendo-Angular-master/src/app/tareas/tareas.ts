import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  standalone: false,
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.scss']
})
export class Tareas {
  tarea: string = "";
  estado: 'pendiente' | 'iniciando' | 'proceso' | 'completada' = 'pendiente';

  enviarTarea() {
    if (!this.tarea.trim()) return;

    this.estado = 'iniciando';

    // Después de 1s pasa a "proceso"
    setTimeout(() => {
      this.estado = 'proceso';
    }, 1000);
  }

  marcarComoCompletada() {
    this.estado = 'completada';
  }
}
