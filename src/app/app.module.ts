import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileComponent } from './profile/profile.component';
import { DatecounterPipe } from './datecounter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainFormComponent,
    RepositoriesComponent,
    ProfileComponent,
    DatecounterPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
