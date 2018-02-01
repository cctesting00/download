import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseComponent } from './components/response/response.component';

const appRouter: Routes = [
    {
      path: '',
      component: ResponseComponent
    }
];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRouter
      )
    ],
    exports: [RouterModule]
  })

export class AppRouterModule {}