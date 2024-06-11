import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<any[]> {
    return this.http.get<any[]>('assets/jsons/properties.json');
  }

  getLatestProperties(): Observable<any[]> {
    return this.http.get<any[]>('assets/jsons/properties.json').pipe(
      map(properties => {
        properties.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return properties.slice(0, 3);
      })
    );
  }
  getSingleProperty(id: number): Observable<any> {
    return this.http.get<any[]>('../assets/jsons/properties.json').pipe(
      map(properties => properties.find(property => property.id === id))
    );
  }
}