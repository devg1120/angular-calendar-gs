import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { NbThemeModule } from '@nebular/theme';
//import { NbSidebarModule, NbLayoutModule, NbButtonModule ,NbIconModule} from '@nebular/theme';
//import { NbEvaIconsModule } from '@nebular/eva-icons';
//mport { MatToolbarModule } from '@angular/material';



import { NgxWidgetGridModule } from 'ngx-widget-grid';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { MaterialModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/root/app.component';
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
              MaterialModule,
              NgxWidgetGridModule
              //    MatToolbarModule,
              //    MatSidenavModule,
              //    MatListModule,
              //    MatButtonModule,
              //    MatIconModule
            ]
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
