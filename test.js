const { Configuration, OpenAIApi } = require("openai");

const configuration = new Conifguration({
    apikey: process.env.OPENAI_API_KEY
});

const apenai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 9,
    max_tokens: 7,
});
