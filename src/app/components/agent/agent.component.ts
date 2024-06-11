import { Component, Input } from '@angular/core';
import { Agent } from '../../class/agent.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  @Input() agent!:Agent;
}
