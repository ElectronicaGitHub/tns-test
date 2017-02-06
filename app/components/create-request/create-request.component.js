"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var request_1 = require("../../models/request");
var item_service_1 = require("../../services/item.service");
var CreateRequestComponent = (function () {
    function CreateRequestComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
        this.request = new request_1.Request();
        console.log('this.request', this.request);
    }
    CreateRequestComponent.prototype.submit = function () {
        console.dump(this.request);
    };
    CreateRequestComponent.prototype.ngOnInit = function () {
    };
    return CreateRequestComponent;
}());
CreateRequestComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./create-request.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService, router_1.ActivatedRoute])
], CreateRequestComponent);
exports.CreateRequestComponent = CreateRequestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlcXVlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLXJlcXVlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBR2pELGdEQUErQztBQUMvQyw0REFBMEQ7QUFRMUQsSUFBYSxzQkFBc0I7SUFLL0IsZ0NBQW9CLFdBQXdCLEVBQVUsS0FBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUV2RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxzQkFBc0I7SUFObEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsaUNBQWlDO0tBQ2pELENBQUM7cUNBT21DLDBCQUFXLEVBQWlCLHVCQUFjO0dBTGxFLHNCQUFzQixDQWtCbEM7QUFsQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2l0ZW1cIjtcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3JlcXVlc3RcIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1yZXF1ZXN0LmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZXF1ZXN0OlJlcXVlc3Q7XG4gICAgaXRlbTogSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5yZXF1ZXN0JywgdGhpcy5yZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZHVtcCh0aGlzLnJlcXVlc3QpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==