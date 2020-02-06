import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SearchRoutingModule,
        StatModule
    ],
    declarations: [
        SearchComponent,
       
    ]
})
export class SearchModule {}
