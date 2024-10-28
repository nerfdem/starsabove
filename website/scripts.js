async function loadQuotes() {
    try {
        const response = await fetch('quotes.txt');
        const text = await response.text();
        const quotes = text.split('\n').filter(quote => quote.trim() !== '');
        const container = document.getElementById('quotes-container');
        quotes.forEach(quote => {
            const p = document.createElement('p');
            p.textContent = quote;
            container.appendChild(p);
        });
    } catch (error) {
        console.error('Error loading quotes:', error);
    }
}

window.onload = loadQuotes;