var numeral = require("numeral");

module.exports = {
    format_date: (date) => {
        const options = { timeZone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      },
      
    format_amount: (amount) => {
        return numeral(amount).format("$0,0.00")
    }
}