import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { CreateRequestComponent } from "./components/create-request/create-request.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsListComponent },
    { path: "item/:id", component: ItemDetailComponent },
    
    { path: "request/create", component : CreateRequestComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }