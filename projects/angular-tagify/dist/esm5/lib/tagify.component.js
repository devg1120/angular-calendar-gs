/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TagifyService } from './tagify.service';
/**
 * @record
 */
export function SettingsModel() { }
if (false) {
    /** @type {?|undefined} */
    SettingsModel.prototype.delimiters;
    /** @type {?|undefined} */
    SettingsModel.prototype.pattern;
    /** @type {?|undefined} */
    SettingsModel.prototype.mode;
    /** @type {?|undefined} */
    SettingsModel.prototype.duplicates;
    /** @type {?|undefined} */
    SettingsModel.prototype.enforceWhitelist;
    /** @type {?|undefined} */
    SettingsModel.prototype.autocomplete;
    /** @type {?|undefined} */
    SettingsModel.prototype.whitelist;
    /** @type {?|undefined} */
    SettingsModel.prototype.blacklist;
    /** @type {?|undefined} */
    SettingsModel.prototype.addTagOnBlur;
    /** @type {?|undefined} */
    SettingsModel.prototype.callbacks;
    /** @type {?|undefined} */
    SettingsModel.prototype.maxTags;
    /** @type {?|undefined} */
    SettingsModel.prototype.transformTag;
    /** @type {?|undefined} */
    SettingsModel.prototype.tagTemplate;
    /* Skipping unnamed member:
    'dropdown.enabled'?: number;*/
    /* Skipping unnamed member:
    'dropdown.maxItems'?: string;*/
    /* Skipping unnamed member:
    'dropdown.classname'?: string;*/
    /* Skipping unnamed member:
    'dropdown.itemTemplate'?;*/
    /** @type {?} */
    SettingsModel.prototype.Function;
}
var TagifyComponent = /** @class */ (function () {
    function TagifyComponent(tagifyService) {
        this.tagifyService = tagifyService;
        this.add = new EventEmitter(); // returns the added tag + updated tags list
        // returns the added tag + updated tags list
        this.remove = new EventEmitter(); // returns the updated tags list
    }
    /**
     * @return {?}
     */
    TagifyComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.settings)
            return;
        this.settings.callbacks = {
            add: (/**
             * @return {?}
             */
            function () { return _this.add.emit({
                tags: _this.tagify.value,
                added: _this.tagify.value[_this.tagify.value.length - 1]
            }); }),
            remove: (/**
             * @return {?}
             */
            function () { return _this.remove.emit(_this.tagify.value); })
        };
        //console.dir(this.tagifyInputRef);
        this.tagify = this.tagifyService.getTagifyRef(this.tagifyInputRef.nativeElement, this.settings);
    };
    TagifyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tagify',
                    template: "<input *ngIf=\"settings\" #tagifyInputRef/>"
                    //styleUrls: ['./tagify.scss']
                }] }
    ];
    /** @nocollapse */
    TagifyComponent.ctorParameters = function () { return [
        { type: TagifyService }
    ]; };
    TagifyComponent.propDecorators = {
        add: [{ type: Output }],
        remove: [{ type: Output }],
        settings: [{ type: Input }],
        tagifyInputRef: [{ type: ViewChild, args: ['tagifyInputRef', { static: false },] }]
    };
    return TagifyComponent;
}());
export { TagifyComponent };
if (false) {
    /** @type {?} */
    TagifyComponent.prototype.add;
    /** @type {?} */
    TagifyComponent.prototype.remove;
    /** @type {?} */
    TagifyComponent.prototype.settings;
    /** @type {?} */
    TagifyComponent.prototype.tagifyInputRef;
    /**
     * @type {?}
     * @private
     */
    TagifyComponent.prototype.tagify;
    /**
     * @type {?}
     * @private
     */
    TagifyComponent.prototype.tagifyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9hbmd1bGFyLXRhZ2lmeS8iLCJzb3VyY2VzIjpbImxpYi90YWdpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHL0MsbUNBa0JDOzs7SUFqQkMsbUNBQW9COztJQUNwQixnQ0FBaUI7O0lBQ2pCLDZCQUFjOztJQUNkLG1DQUFxQjs7SUFDckIseUNBQTJCOztJQUMzQixxQ0FBdUI7O0lBQ3ZCLGtDQUFxQjs7SUFDckIsa0NBQXFCOztJQUNyQixxQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIsZ0NBQWlCOztJQUNqQixxQ0FBd0I7O0lBQ3hCLG9DQUF1Qjs7Ozs7Ozs7OztJQUlHLGlDQUFTOztBQUlyQztJQVVFLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUp0QyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLDRDQUE0Qzs7UUFDdEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7SUFHbkIsQ0FBQzs7OztJQU9yRCx5Q0FBZTs7O0lBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUc7WUFDeEIsR0FBRzs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN2QixLQUFLLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2RCxDQUFDLEVBSFMsQ0FHVCxDQUFBO1lBQ0YsTUFBTTs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQW5DLENBQW1DLENBQUE7U0FDbEQsQ0FBQztRQUNGLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRyxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsNkNBQTJDO29CQUNyRCw4QkFBOEI7aUJBQy9COzs7O2dCQTVCTyxhQUFhOzs7c0JBOEJsQixNQUFNO3lCQUNOLE1BQU07MkJBQ04sS0FBSztpQ0FLTCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQWdCN0Msc0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxlQUFlOzs7SUFDMUIsOEJBQW1DOztJQUNuQyxpQ0FBc0M7O0lBQ3RDLG1DQUFpQzs7SUFLakMseUNBQStFOzs7OztJQUUvRSxpQ0FBZTs7Ozs7SUFMSCx3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWdpZnlTZXJ2aWNlfSBmcm9tICcuL3RhZ2lmeS5zZXJ2aWNlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzTW9kZWwge1xuICBkZWxpbWl0ZXJzPzogc3RyaW5nO1xuICBwYXR0ZXJuPzogc3RyaW5nO1xuICBtb2RlPzogc3RyaW5nO1xuICBkdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgZW5mb3JjZVdoaXRlbGlzdD86IGJvb2xlYW47XG4gIGF1dG9jb21wbGV0ZT86IGJvb2xlYW47XG4gIHdoaXRlbGlzdD86IHN0cmluZ1tdO1xuICBibGFja2xpc3Q/OiBzdHJpbmdbXTtcbiAgYWRkVGFnT25CbHVyPzogYm9vbGVhbjtcbiAgY2FsbGJhY2tzPzogT2JqZWN0O1xuICBtYXhUYWdzPzogbnVtYmVyO1xuICB0cmFuc2Zvcm1UYWc/OiBGdW5jdGlvbjtcbiAgdGFnVGVtcGxhdGU/OiBGdW5jdGlvbjtcbiAgJ2Ryb3Bkb3duLmVuYWJsZWQnPzogbnVtYmVyO1xuICAnZHJvcGRvd24ubWF4SXRlbXMnPzogc3RyaW5nO1xuICAnZHJvcGRvd24uY2xhc3NuYW1lJz86IHN0cmluZztcbiAgJ2Ryb3Bkb3duLml0ZW1UZW1wbGF0ZSc/OyBGdW5jdGlvbjtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWdpZnknLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCAqbmdJZj1cInNldHRpbmdzXCIgI3RhZ2lmeUlucHV0UmVmLz5gXG4gIC8vc3R5bGVVcmxzOiBbJy4vdGFnaWZ5LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdpZnlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gcmV0dXJucyB0aGUgYWRkZWQgdGFnICsgdXBkYXRlZCB0YWdzIGxpc3RcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gcmV0dXJucyB0aGUgdXBkYXRlZCB0YWdzIGxpc3RcbiAgQElucHV0KCkgc2V0dGluZ3M6IFNldHRpbmdzTW9kZWw7IC8vIGdldCBwb3NzaWJsZSB0YWdpZnkgc2V0dGluZ3NcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhZ2lmeVNlcnZpY2U6IFRhZ2lmeVNlcnZpY2UpIHsgfVxuXG4gIC8vQFZpZXdDaGlsZCgndGFnaWZ5SW5wdXRSZWYnKSB0YWdpZnlJbnB1dFJlZjogYW55O1xuICBAVmlld0NoaWxkKCd0YWdpZnlJbnB1dFJlZicse3N0YXRpYzogZmFsc2V9KSBwdWJsaWMgdGFnaWZ5SW5wdXRSZWY6IEVsZW1lbnRSZWY7ICAvL0dTXG5cbiAgcHJpdmF0ZSB0YWdpZnk7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncykgcmV0dXJuO1xuICAgIHRoaXMuc2V0dGluZ3MuY2FsbGJhY2tzID0ge1xuICAgICAgYWRkOiAoKSA9PiB0aGlzLmFkZC5lbWl0KHtcbiAgICAgICAgdGFnczogdGhpcy50YWdpZnkudmFsdWUsXG4gICAgICAgIGFkZGVkOiB0aGlzLnRhZ2lmeS52YWx1ZVt0aGlzLnRhZ2lmeS52YWx1ZS5sZW5ndGggLSAxXVxuICAgICAgfSksXG4gICAgICByZW1vdmU6ICgpID0+IHRoaXMucmVtb3ZlLmVtaXQodGhpcy50YWdpZnkudmFsdWUpXG4gICAgfTtcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMudGFnaWZ5SW5wdXRSZWYpO1xuICAgIHRoaXMudGFnaWZ5ID0gdGhpcy50YWdpZnlTZXJ2aWNlLmdldFRhZ2lmeVJlZih0aGlzLnRhZ2lmeUlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG4iXX0=