import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAllAgents() : Observable<any[]>{
    return this.http.get<any[]>('assets/jsons/agents.json');
  }

  getSingleAgent(id: number): Observable<any> {
    return this.http.get<any[]>('../assets/jsons/agents.json').pipe(
      map(properties => properties.find(agent => agent.id === id))
    );
  }

}
