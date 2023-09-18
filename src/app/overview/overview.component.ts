import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['roomName', 'checkIn', 'checkOut', 'duration', 'delete'];
  dataSource: any[] = [];

  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.overviewService.getEntries().subscribe(data => {
      this.dataSource = data;
    });
  }

  deleteEntry(id: string): void {
    this.overviewService.deleteEntry(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(entry => entry.id !== id);
    });
  }
}
