import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseComponent } from './components/response/response.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';

const appRouter: Routes = [
    {
      path: '',
      component: ResponseComponent
    },
    {
      path: 'add',
      component: AddCompanyComponent
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