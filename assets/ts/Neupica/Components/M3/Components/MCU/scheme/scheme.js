/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
import { CorePalette } from '../palettes/core_palette.js';
import { hexFromArgb } from "../utils/string_utils.js"
/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
export class Scheme {
    constructor(props) {
        this.props = props;
    }
    get primary() {
        return hexFromArgb(this.props.primary);
    }
    get onPrimary() {
        return hexFromArgb(this.props.onPrimary);
    }
    get primaryContainer() {
        return hexFromArgb(this.props.primaryContainer);
    }
    get onPrimaryContainer() {
        return hexFromArgb(this.props.onPrimaryContainer);
    }
    get secondary() {
        return hexFromArgb(this.props.secondary);
    }
    get onSecondary() {
        return hexFromArgb(this.props.onSecondary);
    }
    get secondaryContainer() {
        return hexFromArgb(this.props.secondaryContainer);
    }
    get onSecondaryContainer() {
        return hexFromArgb(this.props.onSecondaryContainer);
    }
    get tertiary() {
        return hexFromArgb(this.props.tertiary);
    }
    get onTertiary() {
        return hexFromArgb(this.props.onTertiary);
    }
    get tertiaryContainer() {
        return hexFromArgb(this.props.tertiaryContainer);
    }
    get onTertiaryContainer() {
        return hexFromArgb(this.props.onTertiaryContainer);
    }
    get error() {
        return hexFromArgb(this.props.error);
    }
    get onError() {
        return hexFromArgb(this.props.onError);
    }
    get errorContainer() {
        return hexFromArgb(this.props.errorContainer);
    }
    get onErrorContainer() {
        return hexFromArgb(this.props.onErrorContainer);
    }
    get background() {
        return hexFromArgb(this.props.background);
    }
    get onBackground() {
        return hexFromArgb(this.props.onBackground);
    }
    get surface() {
        return hexFromArgb(this.props.surface);
    }
    get onSurface() {
        return hexFromArgb(this.props.onSurface);
    }
    get surfaceVariant() {
        return hexFromArgb(this.props.surfaceVariant);
    }
    get onSurfaceVariant() {
        return hexFromArgb(this.props.onSurfaceVariant);
    }
    get outline() {
        return hexFromArgb(this.props.outline);
    }
    get outlineVariant() {
        return hexFromArgb(this.props.outlineVariant);
    }
    get shadow() {
        return hexFromArgb(this.props.shadow);
    }
    get scrim() {
        return hexFromArgb(this.props.scrim);
    }
    get inverseSurface() {
        return hexFromArgb(this.props.inverseSurface);
    }
    get inverseOnSurface() {
        return hexFromArgb(this.props.inverseOnSurface);
    }
    get inversePrimary() {
        return hexFromArgb(this.props.inversePrimary);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        return Scheme.lightFromCorePalette(CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        return Scheme.darkFromCorePalette(CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        return Scheme.lightFromCorePalette(CorePalette.contentOf(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        return Scheme.darkFromCorePalette(CorePalette.contentOf(argb));
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(40),
            onPrimary: core.a1.tone(100),
            primaryContainer: core.a1.tone(90),
            onPrimaryContainer: core.a1.tone(10),
            secondary: core.a2.tone(40),
            onSecondary: core.a2.tone(100),
            secondaryContainer: core.a2.tone(90),
            onSecondaryContainer: core.a2.tone(10),
            tertiary: core.a3.tone(40),
            onTertiary: core.a3.tone(100),
            tertiaryContainer: core.a3.tone(90),
            onTertiaryContainer: core.a3.tone(10),
            error: core.error.tone(40),
            onError: core.error.tone(100),
            errorContainer: core.error.tone(90),
            onErrorContainer: core.error.tone(10),
            background: core.n1.tone(99),
            onBackground: core.n1.tone(10),
            surface: core.n1.tone(99),
            onSurface: core.n1.tone(10),
            surfaceVariant: core.n2.tone(90),
            onSurfaceVariant: core.n2.tone(30),
            outline: core.n2.tone(50),
            outlineVariant: core.n2.tone(80),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(20),
            inverseOnSurface: core.n1.tone(95),
            inversePrimary: core.a1.tone(80)
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(80),
            onPrimary: core.a1.tone(20),
            primaryContainer: core.a1.tone(30),
            onPrimaryContainer: core.a1.tone(90),
            secondary: core.a2.tone(80),
            onSecondary: core.a2.tone(20),
            secondaryContainer: core.a2.tone(30),
            onSecondaryContainer: core.a2.tone(90),
            tertiary: core.a3.tone(80),
            onTertiary: core.a3.tone(20),
            tertiaryContainer: core.a3.tone(30),
            onTertiaryContainer: core.a3.tone(90),
            error: core.error.tone(80),
            onError: core.error.tone(20),
            errorContainer: core.error.tone(30),
            onErrorContainer: core.error.tone(80),
            background: core.n1.tone(10),
            onBackground: core.n1.tone(90),
            surface: core.n1.tone(10),
            onSurface: core.n1.tone(90),
            surfaceVariant: core.n2.tone(30),
            onSurfaceVariant: core.n2.tone(80),
            outline: core.n2.tone(60),
            outlineVariant: core.n2.tone(30),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(90),
            inverseOnSurface: core.n1.tone(20),
            inversePrimary: core.a1.tone(40)
        });
    }
    toJSON() {
        return Object.assign({}, this.props);
    }
}
//# sourceMappingURL=scheme.js.map