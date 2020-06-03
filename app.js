(function () {
   const button = document.getElementById("generateQuote")
   const quote = document.getElementById("quote")
   const quoteSign = document.getElementById("quoteSign")
   const author = document.getElementById("author")
   const quotes = [
      {
         quote:
         "From where we stand the rain seems random. If we could stand somewhere else, we would see the order in it.",

         author:"-Tony Hillerman"
      },
      {
         quote:
         "Yes, life always takes the side of life, and somehow the victims are blamed. But it wasn’t the best people who survived, nor did the best ones die. It was random!",

         author:"- Art Spiegelman"
      },
      {
         quote:"We know what happens to people who stay in the middle of the road. They get run over!",

         author:"-Aneurin Bevan"
      },
      {
         quote:"Life is worth living as long as there's a laugh in it",

         author:"-L.M. Montgomery"
      },
      {
         quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      
         author: "-Tyne Daly"
      }
      ]

      button.addEventListener('click', function () {
         let random = Math.floor(Math.random()*quotes.length);
         console.log(random);

         
      document.getElementById("quote").textContent = quotes[random].quote;
      document.getElementById("author").textContent = quotes[random].author;
      
      })

    quote.addEventListener('click', addQuotes)
      function addQuotes () {
         const quoteDiv = document.createElement('quote');
         //quoteDiv.classList.add("quote");
      }
   
    author.addEventListener('click', addAuthor)
      function addAuthor () {
         const AuthorDiv = document.createElement('author');
         //quoteDiv.classList.add("quote");
      }

   document.getElementById('quoteSign').onclick.visiblity = "show"
      
})()