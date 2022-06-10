import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";

//declarar nuestro arreglo de rutas
const routes: Routes = [
    {path:'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    
    {path:'heroes', 
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
    {
        path: "404", component: ErrorPageComponent  // nos llevara a error-page.component.html cuando no encuentre algo
    },
    {
        path:"**", redirectTo:"/404" // cuando no encuentre nada nos llevara a 404
    },
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }