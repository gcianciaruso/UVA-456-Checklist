function loadChecks() {
    // loop through local storage and check all the checkboxes in local storage
    for (var i = 0; i < localStorage.length; i++){
        var itemID = localStorage.key(i);
        $("#"+itemID).prop("checked", true);
    }
}

function loadProgressBar() {
    var checksComplete = localStorage.length;
    checksComplete
    var progress = Math.round((checksComplete/123)*100);
    console.log(progress);
    $("#progress-bar").css("width", String(progress)+"%");
    console.log($("#progress-bar").width());
    console.log($("#progress-div").width());
    $("#progress-bar").text(String(checksComplete)+"/123");
}

// call on page load
function startUp() {
    loadChecks();
    loadProgressBar();
}

var listItems = $(".form-check-input");
// loop through each checkbox input
listItems.each(
    function () {
        // when checkbox clicked
        $(this).on("change", function() {
            if (this.checked) {
                // if checked, add checkbox id to localstorage
                localStorage.setItem(String(this.id), "");
            }
            else {
                // else remove from local storage
                localStorage.removeItem(String(this.id));
            }
            // update progress bar
            loadProgressBar();
        });
    }
);