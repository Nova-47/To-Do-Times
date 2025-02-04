const quotes = [
  {
    quote:
      "어떤 일이 충분히 중요하다면, 확률이 당신에게 불리하더라도 그것을 실행한다.",
    author: "Elon Musk",
  },
  {
    quote:
      "끈기는 매우 중요하다. 포기하도록 강요받지 않는 한 절대 포기해서는 안 된다.",
    author: "Elon Musk",
  },
  {
    quote: "돈이 행복을 사는 것은 아니지만, 돈이 없으면 불행이 따른다.",
    author: "Tai Lopez",
  },
  {
    quote: "행복은 건강, 부, 그리고 좋은 인간관계의 조합이다.",
    author: "Naval Ravikant",
  },
  {
    quote: "부는 잠자는 동안에도 수익을 창출하는 자산을 소유하는 것이다.",
    author: "Naval Ravikant",
  },
  {
    quote: "시간을 돈과 교환하는 것을 멈추라.",
    author: "Naval Ravikant",
  },
  {
    quote: "특화된 지식을 쌓아라.",
    author: "Naval Ravikant",
  },
  {
    quote: "장기적으로 생각하고 단기적인 유혹을 피하라.",
    author: "Naval Ravikant",
  },
  {
    quote: "자유는 부의 궁극적인 목표이다.",
    author: "Naval Ravikant",
  },
  {
    quote: "지식은 이자처럼 복리로 증식된다.",
    author: "Naval Ravikant",
  },
  {
    quote: "시간을 통제하는 것이 돈이 주는 최고의 배당이다.",
    author: "Naval Ravikant",
  },
  {
    quote: "자신의 열정을 따르되, 시장의 수요와 일치시켜라.",
    author: "Naval Ravikant",
  },
  {
    quote: "가치를 높이기 위해 끊임없이 배워라.",
    author: "Naval Ravikant",
  },
  {
    quote: "삶을 최적화할 수 있는 습관을 설계하라.",
    author: "Naval Ravikant",
  },
  {
    quote: "행복은 선택이며 내면에서 비롯된다.",
    author: "Naval Ravikant",
  },
  {
    quote: "성공이 행복의 열쇠가 아니다. 행복이 성공의 열쇠이다.",
    author: "Albert Schweitzer",
  },
  {
    quote: "위대한 일을 하는 유일한 방법은 자신이 하는 일을 사랑하는 것이다.",
    author: "Steve Jobs",
  },
  {
    quote:
      "당신의 시간은 한정되어 있으니, 다른 사람의 인생을 사느라 낭비하지 말라.",
    author: "Steve Jobs",
  },
  {
    quote: "혁신은 리더와 추종자를 구분 짓는다.",
    author: "Steve Jobs",
  },
  {
    quote:
      "실패하더라도 후회하지 않을 것임은 알았지만, 시도하지 않는 것을 후회할 것이라는 것을 알았다.",
    author: "Jeff Bezos",
  },
  {
    quote:
      "훌륭한 경험을 제공하면, 고객들은 서로에게 그것을 이야기한다. 입소문은 매우 강력하다.",
    author: "Jeff Bezos",
  },
  {
    quote: "인생은 기지가 부족한 사람들과 어울리기에는 너무 짧다.",
    author: "Jeff Bezos",
  },
  {
    quote: "당신이 할 수 있는 최고의 투자는 자신에게 하는 투자이다.",
    author: "Warren Buffett",
  },
  {
    quote: "가격은 당신이 지불하는 것이고, 가치는 당신이 얻는 것이다.",
    author: "Warren Buffett",
  },
  {
    quote: "위험은 자신이 무엇을 하고 있는지 모를 때 발생한다.",
    author: "Warren Buffett",
  },
  {
    quote:
      "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다: 중요한 것은 계속 나아갈 용기이다.",
    author: "Winston Churchill",
  },
  {
    quote: "내일을 실현하는 데 있어 유일한 한계는 오늘의 의심이다.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "쇠가 뜨거워질 때까지 기다리지 말고, 두드려서 뜨겁게 만들어라.",
    author: "William Butler Yeats",
  },
  {
    quote: "미래는 자신의 꿈의 아름다움을 믿는 사람들의 것이다.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "멈추지 않는 한, 천천히 가는 것은 문제가 되지 않는다.",
    author: "Confucius",
  },
  {
    quote: "천 리 길도 한 걸음부터 시작된다.",
    author: "Lao Tzu",
  },
  {
    quote: "성공은 대개 그것을 찾느라 시간이 없는 사람들에게 온다.",
    author: "Henry David Thoreau",
  },
  {
    quote: "좋은 것을 포기하고 위대한 것을 추구하는 것을 두려워하지 말라.",
    author: "John D. Rockefeller",
  },
  {
    quote: "열심히 일할수록 운이 더 따르는 것 같다.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "성공은 얼마나 높은 곳에 올랐느냐가 아니라, 세상에 얼마나 긍정적인 변화를 만들어냈느냐이다.",
    author: "Roy T. Bennett",
  },
  {
    quote: "성공은 실패에서 실패로 넘어가면서도 열정을 잃지 않는 것이다.",
    author: "Winston Churchill",
  },
  {
    quote: "시작하는 방법은 말만 하지 말고 행동하는 것이다.",
    author: "Walt Disney",
  },
  {
    quote: "시계를 보지 말고, 시계처럼 계속 움직여라.",
    author: "Sam Levenson",
  },
  {
    quote: "성공의 비밀은 평범한 일을 비범하게 잘하는 것이다.",
    author: "John D. Rockefeller Jr.",
  },
  {
    quote: "시도하지 않으면 100%의 기회를 놓친다.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "당신이 할 수 있다고 생각하든, 할 수 없다고 생각하든, 결국 그 생각이 맞다.",
    author: "Henry Ford",
  },
  {
    quote: "성공이 일보다 먼저 오는 유일한 곳은 사전이다.",
    author: "Vidal Sassoon",
  },
  {
    quote: "성공은 당신이 가진 것에 있는 것이 아니라, 당신이 누구인가에 있다.",
    author: "Bo Bennett",
  },
  {
    quote: "기회는 자연히 오지 않는다. 당신이 만들어야 한다.",
    author: "Chris Grosser",
  },
  {
    quote:
      "성공은 행동과 밀접하게 연결되어 있다. 성공한 사람들은 계속해서 움직인다.",
    author: "Conrad Hilton",
  },
  {
    quote: "성공으로 가는 길과 실패로 가는 길은 거의 동일하다.",
    author: "Colin R. Davis",
  },
  {
    quote: "성공은 실패가 없는 것이 아니라, 실패를 극복해 나가는 것이다.",
    author: "Aisha Tyler",
  },
  {
    quote:
      "비판에 현혹되지 말라. 기억하라—어떤 사람들은 성공의 맛을 오직 당신을 한 입 물어뜯음으로써만 본다.",
    author: "Zig Ziglar",
  },
  {
    quote: "성공은 바닥에 닿았을 때 얼마나 높이 튕겨 오르느냐이다.",
    author: "George S. Patton",
  },
  {
    quote:
      "새는 알에서 탈출하기 위해 싸운다. 알은 곧 세상이다. 태어나려는 자는 반드시 한 세상을 파괴해야 한다.",
    author: "Demian",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;

/**

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


 */
