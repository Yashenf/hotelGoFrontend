const bookingData = {
    location: null,
    pkg: null,
    hotel: null,
    vehicle: null
}


$(document).ready(function () {
    let currentStep = 1;

    function showStep(stepNumber) {
        $(`.step`).removeClass("active");
        $(`#step${stepNumber}`).addClass("active");
    }

    $(".next-button").click(function () {
        currentStep++;
        showStep(currentStep);
    });

    $(".prev-button").click(function () {
        currentStep--;
        showStep(currentStep);
    });

    $(".select-button").click(function () {
        // Add your code to handle the selection of plans, hotels, and vehicles
        // You can collect user selections and process them here
    });

    $(".submit-button").click(function () {
        // Add your code to review and submit the trip plan
        // You can collect user selections and submit them here
    });

    showStep(currentStep);

    //------------------------Location {Destination} --------------------------------
    if (bookingData.location == null) {
        $("#nextBtnInLocation").prop("disabled", true);
    } else {
        $("#nextBtnInLocation").prop("disabled", false);
    }

    $("#nextBtnInLocation").click(() => {
        currentStep++;
        showStep(currentStep);
    });

});


$(document).ready(function () {
    // Add a click event listener to each card
    $(".card").click(function () {
        // Remove the 'selected' class from all cards
        $(".card").removeClass("selected");

        // Add the 'selected' class to the clicked card
        $(this).addClass("selected");
    });
});

const setLocation = (location) => {
    bookingData.location = location;
    console.log(bookingData)
    $("#nextBtnInLocation").prop("disabled", false);
}
//    ------------------PKG--------------------------------
const setPkg = (pkgId) => {
    bookingData.pkg = pkgId;
    console.log(bookingData);
}

const setHotel = (hotelId) =>{
    bookingData.hotel=hotelId;
    console.log(bookingData);
}

const setVehicle = (vehicleId) =>{
    bookingData.vehicle=vehicleId;
    console.log(bookingData);
}