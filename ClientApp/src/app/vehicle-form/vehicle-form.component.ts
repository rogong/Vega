import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any;
  models: any[];
  features: Feature;
  vehicle: any = {};

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.loadMakes();
    this.loadFeatures();

  }

  loadMakes() {
    this.vehicleService.getMakes()
      .subscribe(makes =>
        this.makes = makes);
  }

  loadFeatures() {
    this.vehicleService.getFeatures()
      .subscribe(features =>
        this.features = features

      );

  }
  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
