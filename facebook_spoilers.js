// Facebook has some goofy selectors, so we keep track of them in constants to
// make maintenance less gruesome.
const class_toolbar = '_d9y';
const class_toolbar_item = '_1tm3';

// Find the toolbar for the editor window.
var toolbars = document.getElementsByClassName(class_toolbar);
for (var toolbar of toolbars) {
  var lists = toolbar.getElementsByTagName('ul');
  var spoilerButton = document.createElement('li')
  var text = document.createTextNode('sp');
  spoilerButton.appendChild(text);
  spoilerButton.classList.add(class_toolbar_item);
  spoilerButton.addEventListener('click', spoilerFill);

  for (var ul of lists) {
    ul.appendChild(spoilerButton);
  }
}

/**
 * Adds the spoiler space when the button is clicked.
 */
function spoilerFill() {
  // Find the text area.
  var composer = document.getElementById('pagelet_group_composer');
  var textArea = composer.querySelector('[role=textbox]');
  if (!textArea) {
    return
  }

  // Find the text span.
  var textSpan = textArea.querySelector('[data-text=true]');
  if (!textSpan) {
    return
  }

  // Add the spoiler space text.
  var text = textSpan.textContent;
  text = "Automagic spoiler space.\n#spoilers\n.\n.\n.\n.\n.\n" + text;
  textSpan.textContent = text;
}
