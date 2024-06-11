/**
 * Simple module exposing function that deselects current browser selection and returns function that restores selection.
 * 
 * @example
 * ```ts
 * const deselect = require('toggle-selection');
 * const reselect = deselect(); // remove all selection
 * // … 
 * // do something with current selection, text, etc;
 * // …
 * reselect(); // restore selection
 * ```
 */
declare function deselect(): () => void;
export = deselect;
