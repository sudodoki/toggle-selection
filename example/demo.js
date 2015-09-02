var selection = document.getSelection();

document.addEventListener('DOMContentLoaded', function(event) {
  setTimeout(function() {
    if (!selection.rangeCount) { // for demo purposes only
      return;
    }

    var active = document.activeElement;
    var ranges = Array.apply(Array, {
      length: selection.rangeCount
    }).map(function(range, index) {
      return selection.getRangeAt(index);
    });

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

    setTimeout(function() {
      selection.type === 'Caret' &&
      selection.removeAllRanges();

      if (!selection.rangeCount) {
        ranges.forEach(function(range) {
          selection.addRange(range);
        });
      }

      active &&
      active.focus();
      console.log('added');
    }, 1000);

    console.log('copyied');
  }, 2000);
});