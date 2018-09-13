import { NgModule } from '@angular/core';

import { DoodilSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DoodilSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DoodilSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DoodilSharedCommonModule {}
