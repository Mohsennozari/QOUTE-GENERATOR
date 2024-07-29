const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const api_key = "PBGkAT0KXOT/sWm5Dil+bg==zoKxgVGLxAyy7mFb"; // کلید API خود را اینجا قرار دهید

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
        var data = await response.json();
        console.log(data);
        if (data.length > 0) {
            quote.innerHTML = data[0].quote;
            author.innerHTML = data[0].author;
        } else {
            quote.innerHTML = "نقل قولی یافت نشد.";
            author.innerHTML = "";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerHTML = "خطایی در دریافت نقل قول رخ داده است.";
        author.innerHTML = "";
    }
}

getquote(api_url);

function tweet() {
    const tweetText = encodeURIComponent(quote.innerHTML + " ----by " + author.innerHTML);
    window.open("https://twitter.com/intent/tweet?text=" + tweetText, "Tweet window", "width=600,height=300");
}