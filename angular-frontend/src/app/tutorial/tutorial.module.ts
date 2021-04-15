import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// import {SharedModule} from '@common/shared.module';
// import {MeshAnalyzerService} from './mesh-analyzer.service';
// import {MeshAnalyzerListComponent} from '@analyzer-mesh/mesh-list/mesh-analyzer-list.component';
// import {UrlPath} from '@common/constant/url-path';

@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MeshAnalyzerListComponent
      },
      {
        path: UrlPath.MESH_ANALYZER.ROUTE.DETAIL,
        loadChildren: () => import('@analyzer-mesh/mesh-detail/mesh-analyzer-detail.module').then(mod => mod.MeshAnalyzerDetailModule)
      }
    ])
  ],
  declarations: [
    // MeshAnalyzerListComponent,
  ],
  providers: [
    // TutorialService
  ]
})
export class MeshAnalyzerModule {
}
