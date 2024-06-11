import { Component, OnInit } from '@angular/core';
import { PropertiesComponent } from '../properties/properties.component';
import { NewsService } from '../../news/business-logic/api/news.service';
import { AgentService } from '../../agents/business-logic/api/agent.service';
import { PropertyService } from '../../properties/business-logic/api/property.service';
import { Property } from '../../class/property.model';
import { Agent } from '../../class/agent.model';
import { News } from '../../class/news.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


    properties: Property[] = [];
    agents: Agent[] = [];
    news:News[] =[];

    constructor(private propertyService: PropertyService,private agentService: AgentService,private newsService : NewsService) { }

    ngOnInit(): void {
      this.propertyService.getLatestProperties().subscribe(data => {
        this.properties = data;
      });
      this.agentService.getAllAgents().subscribe(data1=>{
        this.agents = data1;
      })
      this.newsService.getAllNews().subscribe(data2=>{
        this.news=data2;
      })
    }
}
