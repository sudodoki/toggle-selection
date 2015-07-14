var module = module || {};
function deselectAll() {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {  // Firefox
    window.getSelection().removeAllRanges();
  }
}

function select(range) {
  // debugger
  // var element = [].slice.call(range.commonAncestorContainer.childNodes)[range.childElementCount]
  // console.log([].slice.call(range.commonAncestorContainer.childNodes), range.childElementCount, element);
  // range.selectNode(element);
  document.getSelection().addRange(range);
}

module.exports = function () {
  var previousRange = window.getSelection().getRangeAt(0).cloneRange();
  // console.dir(previousRange);
  deselectAll();
  return function removeSelection() {
    // console.log(previousRange);
    deselectAll();
    // var range = document.createRange();
    // console.dir(previousRange)
    // range.cloneRange(previousRange);
    select(previousRange);
  }
}

///

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