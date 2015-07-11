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
