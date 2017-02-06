import { Component, OnInit } from "@angular/core";

import { Item } from "../../models/item";
import { ItemService } from "../../services/item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items-list.component.html",
})
export class ItemsListComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
