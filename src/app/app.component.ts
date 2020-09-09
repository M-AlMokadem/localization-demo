import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'angular-localization';

  constructor(private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document) 
    {}

    changeLangage(lang: string) {
      console.log(this.document.getElementsByTagName(
        "html"
      ))
      let htmlTag = this.document.getElementsByTagName(
        "html"
      )[0] as HTMLHtmlElement;
      htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
      this.translateService.setDefaultLang(lang);
      this.translateService.use(lang);
      this.changeCssFile(lang);
    }

    changeCssFile(lang: string) {
      let headTag = this.document.getElementsByTagName(
        "head"
      )[0] as HTMLHeadElement;
      let existingLink = this.document.getElementById(
        "langCss"
      ) as HTMLLinkElement;
  
      let bundleName = lang === "ar" ? "arabicStyle" : "englishStyle";
  
      if (existingLink) {
        existingLink.href = bundleName;
        console.log('existingLink ---> ',existingLink.href);
      } else {
        let newLink = this.document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.type = "text/css";
        newLink.id = "langCss";
        newLink.href = bundleName;
        headTag.appendChild(newLink);
      }
    }

  

}
