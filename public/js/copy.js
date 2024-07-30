function copyText(elementName, iconElement) {
  var copyText = document.getElementsByName(elementName)[0];
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);

  // Hide the icon and show the copied text
  iconElement.style.display = "none";
  var copiedTextElement = iconElement.nextElementSibling;
  copiedTextElement.style.display = "block";

  // Revert back to the icon after 2 seconds
  setTimeout(function () {
    copiedTextElement.style.display = "none";
    iconElement.style.display = "inline-block";
  }, 2000);
}
