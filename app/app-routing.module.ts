import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard} from './guard/logout.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [LoginGuard]
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'menu-hamburguesa',
    loadChildren: () => import('./pages/menu-hamburguesa/menu-hamburguesa.module').then( m => m.MenuHamburguesaPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'historial-pedidos',
    loadChildren: () => import('./pages/historial-pedidos/historial-pedidos.module').then( m => m.HistorialPedidosPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pages/pedido/pedido.module').then( m => m.PedidoPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule),
    canActivate: [LoginGuard]
    
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pagof',
    loadChildren: () => import('./pages/pagof/pagof.module').then( m => m.PagofPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule),
    data: { title: 'Detalle de Producto' },
    canActivate: [LoginGuard]
  },
  {
    path: 'menu-papasfritas',
    loadChildren: () => import('./pages/menu-papasfritas/menu-papasfritas.module').then( m => m.MenuPapasfritasPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'menu-complet',
    loadChildren: () => import('./pages/menu-complet/menu-complet.module').then( m => m.MenuCompletPageModule),
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
