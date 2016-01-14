(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } 
}(this, function () {
    function toggle() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function () {};
      }
      var active = document.activeElement;
    
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
    
      switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
        case 'INPUT':
        case 'TEXTAREA':
          active.blur();
          break;
    
        default:
          active = null;
          break;
      }
    
      selection.removeAllRanges();
      return function () {
        selection.type === 'Caret' &&
        selection.removeAllRanges();
    
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
    
        active &&
        active.focus();
      };
    }
    
    return toggle;
}));
