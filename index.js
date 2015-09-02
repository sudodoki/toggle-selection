var module = module || {};
function deselectAll() {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {  // Firefox
    window.getSelection().removeAllRanges();
  }
}

function select(range) {
  document.getSelection().addRange(range);
}

module.exports = function () {
  var previousRange = window.getSelection().getRangeAt(0).cloneRange();
  deselectAll();
  return function removeSelection() {
    deselectAll();
    select(previousRange);
  }
}
