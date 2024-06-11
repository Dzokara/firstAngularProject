import { Component, ViewEncapsulation } from '@angular/core';
import { PropertyService } from '../../properties/business-logic/api/property.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AgentService } from '../../agents/business-logic/api/agent.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agent } from '../../class/agent.model';
import { Property } from '../../class/property.model';
@Component({
  selector: 'app-property-single',
  templateUrl: './property-single.component.html',
  styleUrl: './property-single.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PropertySingleComponent {
  property!: Property;
  agent!: Agent;
  contactForm!: FormGroup;
  constructor(private propertyService: PropertyService, private route: ActivatedRoute,private agentService: AgentService,private formBuilder: FormBuilder,private router : Router){ this.contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required]
  });}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = parseInt(this.route.snapshot.params['id']);
      if (id) {
        console.log(id);
        this.propertyService.getSingleProperty(id).subscribe(property => {
          this.property = property;
        this.agentService.getSingleAgent(property.agent).subscribe(agent=>{
          this.agent = agent;
        })
        });
      }
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
        this.router.navigate(['/']);
    }
  }
}
