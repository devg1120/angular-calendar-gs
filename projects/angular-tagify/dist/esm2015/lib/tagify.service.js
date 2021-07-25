/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Tagify from '@yaireo/tagify';
import * as i0 from "@angular/core";
export class TagifyService {
    constructor() { }
    /**
     * \@description Singleton used by TagifyComponent to a ref to tagify
     * @param {?} tagifyInputRef
     * @param {?} settings
     * @return {?} tagify instance
     */
    getTagifyRef(tagifyInputRef, settings) {
        if (arguments.length === 0)
            return;
        if (this.tagify)
            return this.tagify;
        this.tagify = new Tagify(tagifyInputRef, settings);
        //console.log("tagify",this.tagify);
        return this.tagify;
    }
    /**
     * \@description removes all tags
     * @return {?}
     */
    removeAll() {
        return this.tagify.removeAllTags();
    }
    /**
     * \@description add multiple tags
     * @param {?} tags
     * @return {?}
     */
    addTags(tags) {
        return this.tagify.addTags(tags);
    }
    /**
     * \@description destroy dom and everything
     * @return {?}
     */
    destroy() {
        return this.tagify.destroy();
    }
}
TagifyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TagifyService.ctorParameters = () => [];
/** @nocollapse */ TagifyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TagifyService_Factory() { return new TagifyService(); }, token: TagifyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TagifyService.prototype.tagify;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnaWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvYW5ndWxhci10YWdpZnkvIiwic291cmNlcyI6WyJsaWIvdGFnaWZ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7O0FBTXpDLE1BQU0sT0FBTyxhQUFhO0lBSXhCLGdCQUFlLENBQUM7Ozs7Ozs7SUFLaEIsWUFBWSxDQUFDLGNBQTBCLEVBQUUsUUFBdUI7UUFDOUQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsb0NBQW9DO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUtNLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBS00sT0FBTyxDQUFDLElBQUk7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUtNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBUYWdpZnkgZnJvbSAnQHlhaXJlby90YWdpZnknO1xuaW1wb3J0IHsgU2V0dGluZ3NNb2RlbCB9IGZyb20gJy4vdGFnaWZ5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRhZ2lmeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdGFnaWZ5OiBUYWdpZnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qKiBAZGVzY3JpcHRpb24gU2luZ2xldG9uIHVzZWQgYnkgVGFnaWZ5Q29tcG9uZW50IHRvIGEgcmVmIHRvIHRhZ2lmeVxuICAgKiBAcmV0dXJucyB0YWdpZnkgaW5zdGFuY2VcbiAgICovXG4gIGdldFRhZ2lmeVJlZih0YWdpZnlJbnB1dFJlZjogRWxlbWVudFJlZiwgc2V0dGluZ3M6IFNldHRpbmdzTW9kZWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnRhZ2lmeSkgcmV0dXJuIHRoaXMudGFnaWZ5O1xuICAgIHRoaXMudGFnaWZ5ID0gbmV3IFRhZ2lmeSggdGFnaWZ5SW5wdXRSZWYsIHNldHRpbmdzKTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGFnaWZ5XCIsdGhpcy50YWdpZnkpO1xuICAgIHJldHVybiB0aGlzLnRhZ2lmeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlcyBhbGwgdGFnc1xuICAgKi9cbiAgcHVibGljIHJlbW92ZUFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdpZnkucmVtb3ZlQWxsVGFncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBhZGQgbXVsdGlwbGUgdGFnc1xuICAgKi9cbiAgcHVibGljIGFkZFRhZ3ModGFncykge1xuICAgIHJldHVybiB0aGlzLnRhZ2lmeS5hZGRUYWdzKHRhZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBkZXN0cm95IGRvbSBhbmQgZXZlcnl0aGluZ1xuICAgKi9cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnaWZ5LmRlc3Ryb3koKTtcbiAgfVxufVxuIl19