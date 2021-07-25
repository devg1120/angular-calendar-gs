import { ElementRef } from '@angular/core';
import { SettingsModel } from './tagify.component';
export declare class TagifyService {
    private tagify;
    constructor();
    /** @description Singleton used by TagifyComponent to a ref to tagify
     * @returns tagify instance
     */
    getTagifyRef(tagifyInputRef: ElementRef, settings: SettingsModel): any;
    /**
     * @description removes all tags
     */
    removeAll(): any;
    /**
     * @description add multiple tags
     */
    addTags(tags: any): any;
    /**
     * @description destroy dom and everything
     */
    destroy(): any;
}
