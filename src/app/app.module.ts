import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AccountsEffects } from './accounts/accounts.effects';
import { AccountsModule } from './accounts/accounts.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { accountsReducer } from './accounts/accounts.reducer';
import { JwtInterceptor } from './core/jwt.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { jwtInterceptor } from './core/jwt.interceptor';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ accounts: accountsReducer }),
    EffectsModule.forRoot([AccountsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    AccountsModule,
    DashboardModule,
    TransactionsModule,
    AdminModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
