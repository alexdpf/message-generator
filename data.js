//1. Create a database - I created a template an asked GPT to do a database based on project requirements
// id, author, quote, and technology
const quoteDatabase = {
    "quotes": [
        {
            "id": 1,
            "author": "Socrates, 358 b.c.",
            "quote": "Don't believe everything (technology) tells you",
            "technology": "TV"
        },
        {
            "id": 2,
            "author": "Albert Einstein, 1879-1955",
            "quote": "The true sign of intelligence is not knowledge but (technology)",
            "technology": "Twitter followers"
        },
        {
            "id": 3,
            "author": "Oscar Wilde, 1854-1900",
            "quote": "The only way to get rid of a temptation is to yield to it, especially if it comes from (technology)",
            "technology": "Amazon Prime"
        },
        {
            "id": 4,
            "author": "William Shakespeare, 1564-1616",
            "quote": "All the world's a stage, and the best stage is (technology)",
            "technology": "YouTube"
        },
        {
            "id": 5,
            "author": "Isaac Newton, 1643-1727",
            "quote": "I can calculate the motion of heavenly bodies, but not even (technology) can calculate the madness of people",
            "technology": "Google Analytics"
        },
        {
            "id": 6,
            "author": "Mahatma Gandhi, 1869-1948",
            "quote": "Live as if you were to die tomorrow; learn as if (technology) would last forever",
            "technology": "Wikipedia"
        },
        {
            "id": 7,
            "author": "Nelson Mandela, 1918-2013",
            "quote": "It always seems impossible until it's downloaded from (technology)",
            "technology": "App Store"
        },
        {
            "id": 8,
            "author": "Leonardo da Vinci, 1452-1519",
            "quote": "Simplicity is the ultimate sophistication, unless you're programming with (technology)",
            "technology": "JavaScript frameworks"
        },
        {
            "id": 9,
            "author": "George Orwell, 1903-1950",
            "quote": "War is peace. Freedom is slavery. Ignorance is (technology)",
            "technology": "Facebook"
        },
        {
            "id": 10,
            "author": "Martin Luther King Jr., 1929-1968",
            "quote": "I have a (technology)",
            "technology": "blog"
        },
        {
            "id": 11,
            "author": "Friedrich Nietzsche, 1844-1900",
            "quote": "That which does not kill us makes us stronger, except for (technology)",
            "technology": "computer viruses"
        },
        {
            "id": 12,
            "author": "Mother Teresa, 1910-1997",
            "quote": "Not all of us can do great things. But we can do small things with great love and even smaller things with (technology)",
            "technology": "Instagram"
        },
        {
            "id": 13,
            "author": "Plato, 427-347 b.c.",
            "quote": "Wisdom begins in wonder, but it ends in (technology)",
            "technology": "Google searches"
        },
        {
            "id": 14,
            "author": "Benjamin Franklin, 1706-1790",
            "quote": "Early to bed and early to rise, unless (technology) keeps you up",
            "technology": "Netflix"
        },
        {
            "id": 15,
            "author": "Winston Churchill, 1874-1965",
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts, just ask (technology)",
            "technology": "Microsoft Windows"
        },
        {
            "id": 16,
            "author": "Marilyn Monroe, 1926-1962",
            "quote": "Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than to be absolutely boring, as proven by (technology)",
            "technology": "TikTok"
        },
        {
            "id": 17,
            "author": "Charles Darwin, 1809-1882",
            "quote": "It is not the strongest that survive, nor the most intelligent, but the one most responsive to (technology)",
            "technology": "software updates"
        },
        {
            "id": 18,
            "author": "Buddha, 563-483 b.c.",
            "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment, or on (technology)",
            "technology": "your smartphone"
        },
        {
            "id": 19,
            "author": "Jane Austen, 1775-1817",
            "quote": "It isn't what we say or think that defines us, but what we do and what we tweet on (technology)",
            "technology": "Twitter"
        },
        {
            "id": 20,
            "author": "Galileo Galilei, 1564-1642",
            "quote": "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use by adopting (technology)",
            "technology": "autocorrect"
        },
        {
            "id": 21,
            "author": "Abraham Lincoln, 1809-1865",
            "quote": "Whatever you are, be a good one, unless you are a (technology)",
            "technology": "pop-up ad"
        },
        {
            "id": 22,
            "author": "Confucius, 551-479 b.c.",
            "quote": "Real knowledge is to know the extent of one’s ignorance, which is infinitely easier with (technology)",
            "technology": "Wikipedia"
        },
        {
            "id": 23,
            "author": "Edgar Allan Poe, 1809-1849",
            "quote": "I became insane, with long intervals of horrible sanity, thanks to (technology)",
            "technology": "social media"
        },
        {
            "id": 24,
            "author": "J.K. Rowling, 1965-",
            "quote": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to (technology)",
            "technology": "online trolls"
        },
        {
            "id": 25,
            "author": "Mark Twain, 1835-1910",
            "quote": "The two most important days in your life are the day you are born and the day you find out about (technology)",
            "technology": "the internet"
        },
        {
            "id": 26,
            "author": "Charles Dickens, 1812-1870",
            "quote": "It was the best of times, it was the worst of times, thanks to (technology)",
            "technology": "online reviews"
        },
        {
            "id": 27,
            "author": "Anne Frank, 1929-1945",
            "quote": "Despite everything, I believe that people are really good at heart, except when they use (technology)",
            "technology": "spam emails"
        },
        {
            "id": 28,
            "author": "Cleopatra, 69-30 b.c.",
            "quote": "I will not be triumphed over, but I may be outperformed by (technology)",
            "technology": "AI algorithms"
        },
        {
            "id": 29,
            "author": "Queen Elizabeth I, 1533-1603",
            "quote": "I know I have the body of a weak and feeble woman, but I have the heart and stomach of a king, and the patience for (technology)",
            "technology": "slow Wi-Fi"
        },
        {
            "id": 30,
            "author": "Julius Caesar, 100-44 b.c.",
            "quote": "Veni, vidi, vici, but I still can't figure out (technology)",
            "technology": "Bluetooth pairing"
        }
    ]
}
//2. create Export function
export default quoteDatabase
