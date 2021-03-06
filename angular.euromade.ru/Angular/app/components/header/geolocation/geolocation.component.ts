﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeolocationService } from '../../../services/geolocation.service';

@Component({
    selector: 'geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit, OnDestroy {

    city: string = '';
    
    constructor(private geoService: GeolocationService) { }

    ngOnInit() {
        this.geoService.geoSubject.subscribe((city: string) => {
            this.city = city;
        });
    }

    ngOnDestroy() {
        this.geoService.geoSubject.unsubscribe();
    }
}
