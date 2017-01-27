/**
 * This file is part of Satie music engraver <https://github.com/jnetterf/satie>.
 * Copyright (C) Joshua Netterfield <joshua.ca> 2015 - present.
 * 
 * Satie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * Satie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with Satie.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @file part of Satie test suite
 */

import BarlineModel from "../implBarline_barlineModel";

import {expect} from "chai";

import {IModel, Type} from "../document";

import Factory from "../engine_factory";

describe("[barline.ts]", function() {
    describe("BarlineModel", function() {
        let factory = new Factory([BarlineModel]);
        let barline: IModel;
        it("can be created", function() {
            barline = factory.create(Type.Barline);
            expect(!!barline).to.be.true;
        });
    });
});
