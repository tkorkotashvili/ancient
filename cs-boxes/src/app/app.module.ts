import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@layoutheader';
import { WalletsSumModule } from './shared/pipes/wallets-sum.pipe';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    PortalModule,
    GraphQLModule,
    HttpClientModule,
    WalletsSumModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
