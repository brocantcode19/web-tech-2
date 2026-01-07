import { Routes } from '@angular/router';
import { Activity1Component } from './activity/activity-1.component';
import {PrelimExamComponent } from './prelim-exam/prelim-exam.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: 'activity-1',
        component: Activity1Component
    },

      {
        path: 'prelim-exam',
        component: PrelimExamComponent
     } 
];
