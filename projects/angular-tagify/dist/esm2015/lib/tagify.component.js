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
export class TagifyComponent {
    // get possible tagify settings
    /**
     * @param {?} tagifyService
     */
    constructor(tagifyService) {
        this.tagifyService = tagifyService;
        this.add = new EventEmitter(); // returns the added tag + updated tags list
        // returns the added tag + updated tags list
        this.remove = new EventEmitter(); // returns the updated tags list
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.settings)
            return;
        this.settings.callbacks = {
            add: (/**
             * @return {?}
             */
            () => this.add.emit({
                tags: this.tagify.value,
                added: this.tagify.value[this.tagify.value.length - 1]
            })),
            remove: (/**
             * @return {?}
             */
            () => this.remove.emit(this.tagify.value))
        };
        //console.dir(this.tagifyInputRef);
        this.tagify = this.tagifyService.getTagifyRef(this.tagifyInputRef.nativeElement, this.settings);
    }
}
TagifyComponent.decorators = [
    { type: Component, args: [{
                selector: 'tagify',
                template: `<input *ngIf="settings" #tagifyInputRef/>`
                //styleUrls: ['./tagify.scss']
            }] }
];
/** @nocollapse */
TagifyComponent.ctorParameters = () => [
    { type: TagifyService }
];
TagifyComponent.propDecorators = {
    add: [{ type: Output }],
    remove: [{ type: Output }],
    settings: [{ type: Input }],
    tagifyInputRef: [{ type: ViewChild, args: ['tagifyInputRef', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9hbmd1bGFyLXRhZ2lmeS8iLCJzb3VyY2VzIjpbImxpYi90YWdpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHL0MsbUNBa0JDOzs7SUFqQkMsbUNBQW9COztJQUNwQixnQ0FBaUI7O0lBQ2pCLDZCQUFjOztJQUNkLG1DQUFxQjs7SUFDckIseUNBQTJCOztJQUMzQixxQ0FBdUI7O0lBQ3ZCLGtDQUFxQjs7SUFDckIsa0NBQXFCOztJQUNyQixxQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIsZ0NBQWlCOztJQUNqQixxQ0FBd0I7O0lBQ3hCLG9DQUF1Qjs7Ozs7Ozs7OztJQUlHLGlDQUFTOztBQVNyQyxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLMUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKdEMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw0Q0FBNEM7O1FBQ3RFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsZ0NBQWdDO0lBR25CLENBQUM7Ozs7SUFPckQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUc7WUFDeEIsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZELENBQUMsQ0FBQTtZQUNGLE1BQU07OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDbEQsQ0FBQztRQUNGLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsMkNBQTJDO2dCQUNyRCw4QkFBOEI7YUFDL0I7Ozs7WUE1Qk8sYUFBYTs7O2tCQThCbEIsTUFBTTtxQkFDTixNQUFNO3VCQUNOLEtBQUs7NkJBS0wsU0FBUyxTQUFDLGdCQUFnQixFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQVAzQyw4QkFBbUM7O0lBQ25DLGlDQUFzQzs7SUFDdEMsbUNBQWlDOztJQUtqQyx5Q0FBK0U7Ozs7O0lBRS9FLGlDQUFlOzs7OztJQUxILHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhZ2lmeVNlcnZpY2V9IGZyb20gJy4vdGFnaWZ5LnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NNb2RlbCB7XG4gIGRlbGltaXRlcnM/OiBzdHJpbmc7XG4gIHBhdHRlcm4/OiBzdHJpbmc7XG4gIG1vZGU/OiBzdHJpbmc7XG4gIGR1cGxpY2F0ZXM/OiBib29sZWFuO1xuICBlbmZvcmNlV2hpdGVsaXN0PzogYm9vbGVhbjtcbiAgYXV0b2NvbXBsZXRlPzogYm9vbGVhbjtcbiAgd2hpdGVsaXN0Pzogc3RyaW5nW107XG4gIGJsYWNrbGlzdD86IHN0cmluZ1tdO1xuICBhZGRUYWdPbkJsdXI/OiBib29sZWFuO1xuICBjYWxsYmFja3M/OiBPYmplY3Q7XG4gIG1heFRhZ3M/OiBudW1iZXI7XG4gIHRyYW5zZm9ybVRhZz86IEZ1bmN0aW9uO1xuICB0YWdUZW1wbGF0ZT86IEZ1bmN0aW9uO1xuICAnZHJvcGRvd24uZW5hYmxlZCc/OiBudW1iZXI7XG4gICdkcm9wZG93bi5tYXhJdGVtcyc/OiBzdHJpbmc7XG4gICdkcm9wZG93bi5jbGFzc25hbWUnPzogc3RyaW5nO1xuICAnZHJvcGRvd24uaXRlbVRlbXBsYXRlJz87IEZ1bmN0aW9uO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhZ2lmeScsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICpuZ0lmPVwic2V0dGluZ3NcIiAjdGFnaWZ5SW5wdXRSZWYvPmBcbiAgLy9zdHlsZVVybHM6IFsnLi90YWdpZnkuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhZ2lmeUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyByZXR1cm5zIHRoZSBhZGRlZCB0YWcgKyB1cGRhdGVkIHRhZ3MgbGlzdFxuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyByZXR1cm5zIHRoZSB1cGRhdGVkIHRhZ3MgbGlzdFxuICBASW5wdXQoKSBzZXR0aW5nczogU2V0dGluZ3NNb2RlbDsgLy8gZ2V0IHBvc3NpYmxlIHRhZ2lmeSBzZXR0aW5nc1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFnaWZ5U2VydmljZTogVGFnaWZ5U2VydmljZSkgeyB9XG5cbiAgLy9AVmlld0NoaWxkKCd0YWdpZnlJbnB1dFJlZicpIHRhZ2lmeUlucHV0UmVmOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ3RhZ2lmeUlucHV0UmVmJyx7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyB0YWdpZnlJbnB1dFJlZjogRWxlbWVudFJlZjsgIC8vR1NcblxuICBwcml2YXRlIHRhZ2lmeTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzKSByZXR1cm47XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxsYmFja3MgPSB7XG4gICAgICBhZGQ6ICgpID0+IHRoaXMuYWRkLmVtaXQoe1xuICAgICAgICB0YWdzOiB0aGlzLnRhZ2lmeS52YWx1ZSxcbiAgICAgICAgYWRkZWQ6IHRoaXMudGFnaWZ5LnZhbHVlW3RoaXMudGFnaWZ5LnZhbHVlLmxlbmd0aCAtIDFdXG4gICAgICB9KSxcbiAgICAgIHJlbW92ZTogKCkgPT4gdGhpcy5yZW1vdmUuZW1pdCh0aGlzLnRhZ2lmeS52YWx1ZSlcbiAgICB9O1xuICAgIC8vY29uc29sZS5kaXIodGhpcy50YWdpZnlJbnB1dFJlZik7XG4gICAgdGhpcy50YWdpZnkgPSB0aGlzLnRhZ2lmeVNlcnZpY2UuZ2V0VGFnaWZ5UmVmKHRoaXMudGFnaWZ5SW5wdXRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cbiJdfQ==