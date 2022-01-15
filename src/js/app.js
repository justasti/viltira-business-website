window.pressed = function () {
  let a = document.getElementById("file");
  if (a.value == "") {
    fileLabel.textContent = "Pasirinkite dokumentą";
  } else {
    var theSplit = a.value.split("\\");
    console.log(theSplit);
    fileLabel.textContent = `Dokumentas: ${theSplit[theSplit.length - 1]}`;
  }
};
