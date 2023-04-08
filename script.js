function calculate() {
    const currentDate = new Date();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const days = currentDate.getDate() - day + 31;
    const months = currentDate.getMonth() - month + 12;
    const years = currentDate.getFullYear() - year - 1;

    document.getElementById("result1").innerHTML = days + " days";
    document.getElementById("result2").innerHTML = months + " months";
    document.getElementById("result3").innerHTML = years + " years";
    check_day();
    check_month();
    check_year();
    if (check_day.error1 == "" && check_day.error2 == "" && check_day.error3 == "") {
        document.getElementById("result1").innerHTML = day_field + " days ";
        document.getElementById("result2").innerHTML = month_field + " months ";
        document.getElementById("result3").innerHTML = year_field + " years ";
    } else {
        check_day.error1;
    }

}


function check_day() {
    var error1 = "",
        day_field = 0;

    const day_field = calculate.days;


    if (day_field >= 1 && day_field <= 31) {
        if (month_field == 2) {
            if (year_field % 4 == 0) {
                if (day_field > 29) {
                    error1 += "Must be a valid day";
                } else {
                    day_field += calculate.days;
                }
            } else if (year_field % 4 != 0) {
                if (day_field > 28) {
                    error1 += "Must be a valid day";
                } else {
                    day_field += calculate.days;
                }
            }
        }
    } else {
        error1 += "Must be a valid day";
    }

    if (error1 == "") {
        document.getElementById("result1").innerHTML = day_field + " days ";
    } else {
        error1;
    }

}

function check_month() {
    var error2 = "",
        month_field = 0;

    const month_field = calculate.months;

    if (month_field >= 1 && month_field <= 12) {
        month_field += calculate.months;
    } else {
        error2 += "Must be a valid month";
    }
}

function check_year() {
    var error3 = "",
        year_field = 0;

    const year_field = calculate.years;

    if (calculate.years >= 0) {
        year_field += calculate.years;
    } else {
        error3 += "Must be a valid year";
    }
}