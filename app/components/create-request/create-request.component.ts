import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "../../models/item";
import { Request } from "../../models/request";
import { ItemService } from "../../services/item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./create-request.component.html",
})

export class CreateRequestComponent implements OnInit {

    request:Request;
    item: Item;

    constructor(private itemService: ItemService, private route: ActivatedRoute) {
        
        this.request = new Request();

        console.log('this.request', this.request);
    }

    submit(): void {
        console.dump(this.request);
    }

    ngOnInit(): void {
    }
}
