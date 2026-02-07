console.log("skiBuddyCalculator.js loaded");

$(document).ready(function () {
    console.log("Document ready, wiring click handler");

    $("#calcBtn").on("click", function () {
        console.log("Calculate clicked");

        $("#hoursError").hide().text("");
        $("#total").val("");

        const hoursRaw = $("#hours").val();
        const hours = parseFloat(hoursRaw);
        const rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            $("#hoursError").text("Enter a positive number of hours.").show();
            return;
        }

        const total = hours * rate;
        $("#total").val(total.toFixed(2));
    });
});
