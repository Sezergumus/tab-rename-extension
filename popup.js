document.getElementById("form").addEventListener("submit", function() {
    document.getElementById("button").disabled = true;
    var textelement = document.getElementById("name");
    var newname     = textelement.value;
    if (newname.replace(/\s+/g, '') !== "") {
      var titlecmd    = "document.title = '".concat(newname).concat("'");
      chrome.tabs.query({'active': true, 
                         'windowId': chrome.windows.WINDOW_ID_CURRENT},
          function(tab) {
              chrome.tabs.executeScript(tab.id, {code: titlecmd});
          }
      );
      textelement.value = "";
    }
    document.getElementById("button").disabled = false;
    window.close();
    return;
  });