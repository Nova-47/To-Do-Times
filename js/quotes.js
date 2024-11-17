const quotes = [
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "Persistence is very important. You should not give up unless you are forced to give up.",
    author: "Elon Musk",
  },
  {
    quote:
      "Money doesn't buy happiness, but the lack of money buys you misery.",
    author: "Tai Lopez",
  },
  {
    quote:
      "Happiness is a combination of health, wealth, and good relationships.",
    author: "Naval Ravikant",
  },
  {
    quote: "Wealth is having assets that earn while you sleep.",
    author: "Naval Ravikant",
  },
  { quote: "Stop trading time for money.", author: "Naval Ravikant" },
  { quote: "Build your specific knowledge.", author: "Naval Ravikant" },
  {
    quote: "Think long-term and avoid short-term temptations.",
    author: "Naval Ravikant",
  },
  {
    quote: "Freedom is the ultimate goal of wealth.",
    author: "Naval Ravikant",
  },
  { quote: "Knowledge compounds like interest.", author: "Naval Ravikant" },
  {
    quote: "Controlling your time is the highest dividend money pays.",
    author: "Naval Ravikant",
  },
  {
    quote: "Follow your passion, but align it with market demand.",
    author: "Naval Ravikant",
  },
  {
    quote: "Continuously learn to increase your value.",
    author: "Naval Ravikant",
  },
  { quote: "Design habits to optimize your life.", author: "Naval Ravikant" },
  {
    quote: "Happiness is a choice and comes from within.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote:
      "I knew that if I failed, I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    author: "Jeff Bezos",
  },
  {
    quote:
      "If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.",
    author: "Jeff Bezos",
  },
  {
    quote: "Life's too short to hang out with people who aren't resourceful.",
    author: "Jeff Bezos",
  },
  {
    quote: "The best investment you can make is in yourself.",
    author: "Warren Buffett",
  },
  {
    quote: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett",
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  },
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
    author: "Aisha Tyler",
  },
  {
    quote:
      "Don't be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.",
    author: "Zig Ziglar",
  },
  {
    quote: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    quote:
      "The bird fights its way out of the egg. The egg is the world. Who would be born must destroy a world.",
    author: "Demian",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
