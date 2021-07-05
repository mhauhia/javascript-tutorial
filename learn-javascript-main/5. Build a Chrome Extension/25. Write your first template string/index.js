// template strings/literals

const recipient = "James"
const sender = "Markus"
// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
// console.log(email)

const email = `
Hey ${recipient}!

How is it going?

Cheers ${sender}

            `
            console.log(email);