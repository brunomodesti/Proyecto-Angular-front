import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        MatIconModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }