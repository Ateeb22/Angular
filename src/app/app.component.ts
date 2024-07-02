import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkComponent } from '../components/work/work.component';
import { ModifyComponent } from '../components/modify/modify.component';
import { TemplateComponent } from '../components/template/template.component';
import { BothComponent } from '../components/both/both.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WorkComponent,ModifyComponent,TemplateComponent,BothComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangular';
  data = " so lets begin this world"
  info()
  {
    return "Lets drink Alcohol"
  }
  back(name:string)
  {
    alert(name)
  }
  // call(val:string)
  // {
  //   console.warn(val)
  // }
}
