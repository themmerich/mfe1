import { createApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {createCustomElement} from "@angular/elements";
import {NgZone} from "@angular/core";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";

(async () => {
  const app = await createApplication({
    providers: [
      (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone }: [],
      provideRouter(routes)
    ]
  });

  const webCmp = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe1-root', webCmp);
})();
