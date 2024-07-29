const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const api_key = "PBGkAT0KXOT/sWm5Dil+bg==zoKxgVGLxAyy7mFb"; // Place your API key here

async function getquote(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': api_key
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
            quote.innerHTML = data[0].quote;
            author.innerHTML = data[0].author;
        } else {
            quote.innerHTML = "No quote found.";
            author.innerHTML = "";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerHTML = "An error occurred while fetching the quote.";
        author.innerHTML = "";
    }
}

getquote(api_url);

function tweet() {
    const tweetText = encodeURIComponent(quote.innerHTML + " ----by " + author.innerHTML);
    window.open("https://twitter.com/intent/tweet?text=" + tweetText, "Tweet window", "width=600,height=300");
}