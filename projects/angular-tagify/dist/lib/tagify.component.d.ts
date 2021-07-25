import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { TagifyService } from './tagify.service';
export interface SettingsModel {
    delimiters?: string;
    pattern?: string;
    mode?: string;
    duplicates?: boolean;
    enforceWhitelist?: boolean;
    autocomplete?: boolean;
    whitelist?: string[];
    blacklist?: string[];
    addTagOnBlur?: boolean;
    callbacks?: Object;
    maxTags?: number;
    transformTag?: Function;
    tagTemplate?: Function;
    'dropdown.enabled'?: number;
    'dropdown.maxItems'?: string;
    'dropdown.classname'?: string;
    'dropdown.itemTemplate'?: any;
    Function: any;
}
export declare class TagifyComponent implements AfterViewInit {
    private tagifyService;
    add: EventEmitter<any>;
    remove: EventEmitter<any>;
    settings: SettingsModel;
    constructor(tagifyService: TagifyService);
    tagifyInputRef: ElementRef;
    private tagify;
    ngAfterViewInit(): void;
}
