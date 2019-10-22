import { Project } from '../../models/project';
import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css'],
  providers: [ProjectService]
})
export class CreateprojectComponent implements OnInit {
  constructor(
    private projectService: ProjectService
  ) {
      this.title = 'Créer un Projet';
      this.project = new Project('', '', '', '', '', '', 0, '', 0 );
   }
      public title: string;
      public project: Project;
      public status: boolean;

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.project);
    this.projectService.saveProject(this.project).subscribe();
    if (this.project) {
           this.status = true;
           form.reset();
        } else {

          this.status = false;
        }

    }

  }

