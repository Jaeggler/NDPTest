import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDataIE } from '../model/userdata.model'

export class ApiService {

  user: UserDataIE = {
    anios_experiencia_profesional: 0,
    apellidos: 'Test',
    direccion: 'Surquillo',
    dni: '44444499',
    mail: 'bustertest@example.com',
    nombres: 'Buster'
  };

  httpParams = new HttpParams().set('id', '90');

  options = { params: this.httpParams };

  constructor(private httpClient: HttpClient) { }

  public getUserList(){
    return this.httpClient.get('http://team.360salesolutions.com:8082/ndp-interview/api/Usuario/All');
  }

  public AddUser(userdata){
    return this.httpClient.post<UserDataIE>('http://team.360salesolutions.com:8082/ndp-interview/api/Usuario/Insert', userdata);
  }

  public DeleteUser(){
    return this.httpClient.delete('http://team.360salesolutions.com:8082/ndp-interview/api/Usuario/delete', this.options);
  }

}


