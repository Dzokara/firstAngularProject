import { Component } from '@angular/core';
import { AgentService } from '../../agents/business-logic/api/agent.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  agents: any[] = [];

  constructor(private agentService: AgentService){

  }
  ngOnInit() : void{
    this.agentService.getAllAgents().subscribe(data=>{
      this.agents=data;
    })
  }
}
