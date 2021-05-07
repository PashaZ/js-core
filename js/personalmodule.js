// task2 personalmodule

function greetUser (name, date) {

    let currenthour = date.getHours()

    if (currenthour == 23 || currenthour < 5) {
        return "Good night, " + name + "!";
    } else if (currenthour >= 5 && currenthour < 11) {
        return "Good morning, " + name + "!";
    } else if (currenthour >= 11 && currenthour < 17) {
        return "Good afternoon, " + name + "!";
    } else {
        return "Good evening, " + name + "!";
    }
}
exports.greetUser = greetUser;