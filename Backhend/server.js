import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "The Mathematician's Pet",
            "content": "Why did the mathematician bring a ladder to the bar? Because he heard the drinks were on the house!"
        },
        {
            "id": 2,
            "title": "Light Bulb Moment",
            "content": "How many programmers does it take to change a light bulb? None, that's a hardware issue!"
        },
        {
            "id": 3,
            "title": "Coffee Lover's Dilemma",
            "content": "Why do coffee beans never get into arguments? They know how to espresso themselves properly!"
        },
        {
            "id": 4,
            "title": "Time Travel Troubles",
            "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            "id": 5,
            "title": "The Invisible Man",
            "content": "I used to play piano by ear, but now I use my hands and fingers."
        },
    ]

    res.send(jokes);
})


const port = process.env.PORT || 3000;   //enviorment variable file


app.listen(port, (req, res) => {
    console.log(`Serve at http://localhost:${port}`);
});
