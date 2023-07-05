/**
 * Simple module exposing function that deselects current browser selection and returns function that restores selection.
 * 
 * @example
 * ```ts
 * import deselect from 'toggle-selection';
 * const reselect = deselect(); // remove all selection
 * // … 
 * // do something with current selection, text, etc;
 * // …
 * reselect(); // restore selection
 * ```
 */
declare function deselect(): () => void;

export default deselect;
