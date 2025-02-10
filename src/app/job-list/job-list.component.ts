import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jobs from '../../../public/assets/jobs.json'

@Component({
  selector: 'app-job-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
arrJobs = jobs;
filtraJobs = jobs;

selectCity = '';
selectShift = '';
selectDaysAgo = '';

aplicarFiltro(){
  this.filtraJobs = this.arrJobs.filter((job)=>{
    return(
      (this.selectCity ? job.city === this.selectCity : true) &&
      (this.selectShift ? job.shift === this.selectShift : true) &&
      (this.selectDaysAgo ? job.daysAgo.toString() === this.selectDaysAgo : true) 
    )
  })
}

limpaFiltro(){
  this.selectCity = '';
  this.selectDaysAgo = '';
  this.selectShift = '';
  this.filtraJobs = this.arrJobs;
}
}
