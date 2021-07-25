import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Output, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Tagify from '@yaireo/tagify';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ TagifyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TagifyService_Factory() { return new TagifyService(); }, token: TagifyService, providedIn: "root" });
    return TagifyService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TagifyService.prototype.tagify;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SettingsModel() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tagify.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TagifyModule = /** @class */ (function () {
    function TagifyModule() {
    }
    /**
     * @return {?}
     */
    TagifyModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TagifyModule,
            providers: [TagifyService]
        };
    };
    TagifyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TagifyComponent],
                    exports: [TagifyComponent],
                    imports: [CommonModule],
                    providers: [TagifyService],
                },] }
    ];
    return TagifyModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: gs-angular-tagify.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TagifyComponent, TagifyModule, TagifyService };
//# sourceMappingURL=gs-angular-tagify.js.map
