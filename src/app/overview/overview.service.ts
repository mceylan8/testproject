import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  private apiUrl = 'http://localhost:5000/api/overview'; 

  constructor(private http: HttpClient) {}

  getEntries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/entries`);
  }

  deleteEntry(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/entry/${id}`);
  }
}
