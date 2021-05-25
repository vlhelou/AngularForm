import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  FrmCadastro = new FormGroup({
    Observacao: new FormControl(),
    Nome: new FormControl('', [Validators.required]),
    Idade: new FormControl(50,[Validators.min(10), Validators.max(100)])
  });

  GravaCadastro(){
    console.log(this.FrmCadastro.value);
  }
}
