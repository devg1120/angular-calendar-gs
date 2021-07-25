/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Tagify from '@yaireo/tagify';
import * as i0 from "@angular/core";
var TagifyService = /** @class */ (function () {
    function TagifyService() {
    }
    /** @description Singleton used by TagifyComponent to a ref to tagify
     * @returns tagify instance
     */
    /**
     * \@description Singleton used by TagifyComponent to a ref to tagify
     * @param {?} tagifyInputRef
     * @param {?} settings
     * @return {?} tagify instance
     */
    TagifyService.prototype.getTagifyRef = /**
     * \@description Singleton used by TagifyComponent to a ref to tagify
     * @param {?} tagifyInputRef
     * @param {?} settings
     * @return {?} tagify instance
     */
    function (tagifyInputRef, settings) {
        if (arguments.length === 0)
            return;
        if (this.tagify)
            return this.tagify;
        this.tagify = new Tagify(tagifyInputRef, settings);
        //console.log("tagify",this.tagify);
        return this.tagify;
    };
    /**
     * @description removes all tags
     */
    /**
     * \@description removes all tags
     * @return {?}
     */
    TagifyService.prototype.removeAll = /**
     * \@description removes all tags
     * @return {?}
     */
    function () {
        return this.tagify.removeAllTags();
    };
    /**
     * @description add multiple tags
     */
    /**
     * \@description add multiple tags
     * @param {?} tags
     * @return {?}
     */
    TagifyService.prototype.addTags = /**
     * \@description add multiple tags
     * @param {?} tags
     * @return {?}
     */
    function (tags) {
        return this.tagify.addTags(tags);
    };
    /**
     * @description destroy dom and everything
     */
    /**
     * \@description destroy dom and everything
     * @return {?}
     */
    TagifyService.prototype.destroy = /**
     * \@description destroy dom and everything
     * @return {?}
     */
    function () {
        return this.tagify.destroy();
    };
    TagifyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TagifyService.ctorParameters = function () { return []; };
    /** @nocollapse */ TagifyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TagifyService_Factory() { return new TagifyService(); }, token: TagifyService, providedIn: "root" });
    return TagifyService;
}());
export { TagifyService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TagifyService.prototype.tagify;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnaWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvYW5ndWxhci10YWdpZnkvIiwic291cmNlcyI6WyJsaWIvdGFnaWZ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3pDO0lBT0U7SUFBZSxDQUFDO0lBRWhCOztPQUVHOzs7Ozs7O0lBQ0gsb0NBQVk7Ozs7OztJQUFaLFVBQWEsY0FBMEIsRUFBRSxRQUF1QjtRQUM5RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxvQ0FBb0M7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxpQ0FBUzs7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLCtCQUFPOzs7OztJQUFkLFVBQWUsSUFBSTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSwrQkFBTzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFORDtDQTRDQyxBQXhDRCxJQXdDQztTQXJDWSxhQUFhOzs7Ozs7SUFFeEIsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFRhZ2lmeSBmcm9tICdAeWFpcmVvL3RhZ2lmeSc7XG5pbXBvcnQgeyBTZXR0aW5nc01vZGVsIH0gZnJvbSAnLi90YWdpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnaWZ5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSB0YWdpZnk6IFRhZ2lmeTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqIEBkZXNjcmlwdGlvbiBTaW5nbGV0b24gdXNlZCBieSBUYWdpZnlDb21wb25lbnQgdG8gYSByZWYgdG8gdGFnaWZ5XG4gICAqIEByZXR1cm5zIHRhZ2lmeSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VGFnaWZ5UmVmKHRhZ2lmeUlucHV0UmVmOiBFbGVtZW50UmVmLCBzZXR0aW5nczogU2V0dGluZ3NNb2RlbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKHRoaXMudGFnaWZ5KSByZXR1cm4gdGhpcy50YWdpZnk7XG4gICAgdGhpcy50YWdpZnkgPSBuZXcgVGFnaWZ5KCB0YWdpZnlJbnB1dFJlZiwgc2V0dGluZ3MpO1xuICAgIC8vY29uc29sZS5sb2coXCJ0YWdpZnlcIix0aGlzLnRhZ2lmeSk7XG4gICAgcmV0dXJuIHRoaXMudGFnaWZ5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmVzIGFsbCB0YWdzXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQWxsKCkge1xuICAgIHJldHVybiB0aGlzLnRhZ2lmeS5yZW1vdmVBbGxUYWdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGFkZCBtdWx0aXBsZSB0YWdzXG4gICAqL1xuICBwdWJsaWMgYWRkVGFncyh0YWdzKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnaWZ5LmFkZFRhZ3ModGFncyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGRlc3Ryb3kgZG9tIGFuZCBldmVyeXRoaW5nXG4gICAqL1xuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdpZnkuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=