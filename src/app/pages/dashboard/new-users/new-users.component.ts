import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ab-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {

  constructor(private _fb : FormBuilder) { }
  public forma: FormGroup;
  public url: any = '';
  public filedata: any;
  public hide = true;
  public isLoading: boolean;


  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){

    this.forma = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      app: [0, Validators.required]
    });
      // console.log(this.forma.value);
  }

  onInvalidField(fieldTag){
    return this.forma.get(fieldTag).invalid && this.forma.get(fieldTag).touched;
  }

  onValidator(fieldTag: string, validatorTag: string){
    const field = this.forma.controls[fieldTag];
    return field.errors && field.errors[validatorTag] && field.touched;
  }

  campoNoValido(campo: string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  fileEvent(e){
    this.filedata = (e.target as HTMLInputElement).files[0];
    console.log(this.filedata);
    this.forma.patchValue({
        avatar: this.filedata
    });

    // Show image before upload
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(this.filedata);
  }

  save(){}


}
