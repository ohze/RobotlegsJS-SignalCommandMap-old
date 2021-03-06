// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable } from "inversify";

import { Signal } from "signals.js";

import { Data } from "./Data";

@injectable()
export class TargetSignal extends Signal {

    constructor() {
        super(Data);
    }
}
