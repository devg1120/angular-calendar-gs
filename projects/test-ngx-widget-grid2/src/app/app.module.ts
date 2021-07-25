import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule ,NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './components/root/app.component';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { FormsModule } from '@angular/forms';
//import { ClarityModule, ClrFormsModule } from '@clr/angular';
import { AppModuleRouting } from './app.module.routing';
import { AboutComponent } from './components/about/about.component';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';

@NgModule({
            declarations: [
              AppComponent,
              AboutComponent,
              BasicExampleComponent
            ],
            imports: [
              AppModuleRouting,
              BrowserModule,
              FormsModule,
              NgxWidgetGridModule,
		    NbThemeModule.forRoot(),
		        NbLayoutModule,
		        NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
		        NbButtonModule,
		        NbIconModule,
		        NbEvaIconsModule,
		    //              ClarityModule,
		    //              ClrFormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
