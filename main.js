function loadStorage() {
    $("#1").checked = true;
    for (var i = 0; i < localStorage.length; i++){
        var itemID = localStorage.key(i);
        var itemChecked = localStorage.getItem(itemID);
        $("#"+itemID).prop("checked", Boolean(itemChecked));
    }
}

var listItems = $(".form-check-input");
listItems.each(
    function () {
        $(this).on("change", function() {
            if (this.checked) {
                console.log(this.checked);
                localStorage.setItem(String(this.id), String(this.checked));
                for (var i = 0; i < localStorage.length; i++){
                    var itemID = localStorage.getItem(localStorage.key(i));
                    var itemChecked = localStorage.getItem(String(itemID));
                    $("#"+itemID).checked = Boolean(itemChecked);
                }
            }
            else {
                localStorage.removeItem(String(this.id));
            }
        });
    }
);