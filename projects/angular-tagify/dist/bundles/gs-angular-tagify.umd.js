(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@yaireo/tagify')) :
    typeof define === 'function' && define.amd ? define('@gs/angular-tagify', ['exports', '@angular/core', '@angular/common', '@yaireo/tagify'], factory) :
    (global = global || self, factory((global.gs = global.gs || {}, global.gs['angular-tagify'] = {}), global.ng.core, global.ng.common, global['@yaireo/tagify']));
}(this, (function (exports, core, common, Tagify) { 'use strict';

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TagifyService.ctorParameters = function () { return []; };
        /** @nocollapse */ TagifyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TagifyService_Factory() { return new TagifyService(); }, token: TagifyService, providedIn: "root" });
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
            this.add = new core.EventEmitter(); // returns the added tag + updated tags list
            // returns the added tag + updated tags list
            this.remove = new core.EventEmitter(); // returns the updated tags list
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
            { type: core.Component, args: [{
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
            add: [{ type: core.Output }],
            remove: [{ type: core.Output }],
            settings: [{ type: core.Input }],
            tagifyInputRef: [{ type: core.ViewChild, args: ['tagifyInputRef', { static: false },] }]
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
            { type: core.NgModule, args: [{
                        declarations: [TagifyComponent],
                        exports: [TagifyComponent],
                        imports: [common.CommonModule],
                        providers: [TagifyService],
                    },] }
        ];
        return TagifyModule;
    }());

    exports.TagifyComponent = TagifyComponent;
    exports.TagifyModule = TagifyModule;
    exports.TagifyService = TagifyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gs-angular-tagify.umd.js.map
