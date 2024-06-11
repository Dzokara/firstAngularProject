import { Component,Input } from '@angular/core';
import { Property } from '../../class/property.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  @Input() property!: Property ;
}
