const prompt = require('prompt');
prompt.colors=false;
prompt.message='';
prompt.start();
async function readNumber(question, must) {
    return await new Promise((r, e) => {
        let schema = {
            properties: {
                input: {
                    description: question || "Enter a number : ",
                    required: must || true,
                    type: 'number'
                }
            }
        };
        prompt.get(schema, (err, res) => (err ? e(err) : r(res.input)));
    });
}

module.exports = {
    readNumber
}