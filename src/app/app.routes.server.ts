import { RenderMode, ServerRoute } from '@angular/ssr';
import { ActivatedRouteSnapshot } from '@angular/router';
import { YourResolverService } from './services/your-resolver.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

export function getPrerenderParams(route: ActivatedRouteSnapshot): { InitDate: string; FinalDate: string } {
  return {
    InitDate: route.paramMap.get('InitDate')!,
    FinalDate: route.paramMap.get('FinalDate')!
  };
}
