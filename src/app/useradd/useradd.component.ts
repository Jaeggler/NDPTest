import { Component} from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgForm } from '@angular/forms';
import { UserDataIE } from '../model/userdata.model';

@Component ({
  selector: 'app-useradd',
  templateUrl: 'useradd.component.html'
})

export class UserAddComponent{

  user: UserDataIE = {
    anios_experiencia_profesional: 0,
    apellidos: 'string',
    direccion: 'string',
    dni: 'string',
    mail: 'string',
    nombres: 'string'
  };

  constructor(private apiservice: ApiService) {}

  onAddClient(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.user = {
      nombres: form.value.nombre_input,
      apellidos: form.value.apellido_input,
      direccion: form.value.direccion_input,
      dni: form.value.dni_input,
      mail: form.value.mail_input,
      anios_experiencia_profesional: form.value.anios_experiencia_profesional_input};

    this.apiservice.AddUser(this.user)
      .subscribe ((incomingdata) => {
       console.log(incomingdata['code']);
       });

    form.resetForm();
  }

}
