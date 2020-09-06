import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(private translateService: TranslateService) {}
   changeLangage(lang: string) {
   this.translateService.setDefaultLang(lang);
   this.translateService.use(lang);
}

  title = 'angular-localization';

}
