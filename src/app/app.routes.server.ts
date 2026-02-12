import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'students',
    renderMode: RenderMode.Client
  },
  {
    path: 'create-student',
    renderMode: RenderMode.Client
  },
  {
    path: 'activity-1',
    renderMode: RenderMode.Client
  },
  {
    path: 'prelim-exam',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
