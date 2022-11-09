import {
  ComponentPortal,
  DomPortal,
  TemplatePortal,
} from '@angular/cdk/portal';

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export type Portal = TemplatePortal | ComponentPortal<any> | DomPortal;

@Injectable({
  providedIn: 'root',
})
export class PortalBridgeService {
  private activePortal = new Subject<Portal>();

  readonly portal$ = this.activePortal.asObservable();

  constructor() {}

  setPortal(portal: Portal) {
    console.log(portal);
    this.activePortal.next(portal);
  }
}
