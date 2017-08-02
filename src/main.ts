import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import {LOGGING_PROVIDERS} from './logging.service';

if (environment.production) {
  enableProdMode();
}

//bootstrap(App, [LOGGING_PROVIDERS]).catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule);
