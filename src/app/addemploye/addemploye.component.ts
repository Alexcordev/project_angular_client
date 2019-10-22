import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../services/employe.service';
@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css'],
  providers: [EmployeService]
})
export class AddemployeComponent implements OnInit {

  constructor(
    private employeService: EmployeService
  ) {
    this.title = 'Créer un employé';
    this.employe = new Employe('', '', '', '', '', '', '', '', '');
   }
   public title: string;
      public employe: Employe;
      public status: boolean;

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.employe);
    this.employeService.saveEmploye(this.employe).subscribe();
    if (this.employe) {
           this.status = true;
           form.reset();
        } else {

          this.status = false;
        }

    }

  }
