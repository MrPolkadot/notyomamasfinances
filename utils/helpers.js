var numeral = require("numeral");

module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return numeral(amount).format("$0,0.00")
    }
}