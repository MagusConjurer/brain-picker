const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/brainpicker"
);

const quizSeed = [
    {
        title: "Test Quiz",
        category: "test",
        questions: [],
        results: [],
        creator: []
    },
    {
        title: "Test Again",
        category: "test",
        questions: [],
        results: [],
        creator: []
    }
];

const questionSeed = [
    {
        text: "Is this a test?",
        answers: []
    },
    {
        text: "What is a test?",
        answers: []
    }
];

const answerSeed = [
    {
        text: "Yes",
        weights: 5
    },
    {
        text: "No",
        weights: 0
    },
    {
        text: "I don't know",
        weights: 5
    }
]

const resultSeed = [
    {
        title: "Test",
        image: "test.jpg",
        description: "You are a test. You are boring and generic."
    },
    {
        title: "Not a Test",
        image: "notest.jpg",
        description: "You are not a test. What even are you?"
    }
]

db.Quiz
.remove({})
.then(() => db.Quiz.collection.insertMany(quizSeed))
.then(() => db.Question.collection.insertMany(questionSeed))
.then(() => db.Answer.collection.insertMany(answerSeed))
.then(() => db.Result.collection.insertMany(resultSeed))
.then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});