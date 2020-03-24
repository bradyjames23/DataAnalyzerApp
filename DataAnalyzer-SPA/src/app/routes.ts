import { Routes } from '@angular/router';
import { MessagesComponent } from './pages/dashboard/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // http://localhost:4200
    {
        // tslint:disable-next-line:max-line-length
        path: '', // use of this is to add path to the children like http://localhost:4200/dummymessages where path:'dummy' and children path: 'dummy'
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'messages', component: MessagesComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
