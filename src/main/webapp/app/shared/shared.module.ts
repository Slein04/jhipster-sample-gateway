import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JHipsterApiGatewaySharedLibsModule,
  JHipsterApiGatewaySharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JHipsterApiGatewaySharedLibsModule, JHipsterApiGatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JHipsterApiGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterApiGatewaySharedModule {
  static forRoot() {
    return {
      ngModule: JHipsterApiGatewaySharedModule
    };
  }
}
