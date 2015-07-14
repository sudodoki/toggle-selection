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

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    if (!selection.rangeCount) return;

    var range = selection.getRangeAt(0);
    console.log(range);
    selection.removeAllRanges();
    // TODO: check whether selection range is in an input or textarea
    // Selection API does not provide a way to do this
    // If selected text is in an input or textaren, need to blur that element
    // Because if we don't, restored selection will not be rehighlighted

    setTimeout(function() {
      // TODO: check whether selection.rangeCount is 0 before addRange call
      // This is what caused exception you showed me in the bar
      // Even "Caret" selection prevented previous selection from being added
      // I think we should remove "Caret" selections because the time range
      // won't be 1000 ms as it is now, it will be much much shorter
      // User won't be able to select anything sane

      selection.addRange(range);

      console.log('added');
      document.querySelector('textarea').focus(); // doesn't work w/o blur
    }, 1000);

    console.log('copyied');
  }, 2000);
});