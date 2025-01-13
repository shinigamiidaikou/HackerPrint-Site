const text = "Hello World!";
const hackerTextElement = document.getElementById('hackerText');

async function printHackerStyle() {
    let displayText = '';
    
    // Add blinking cursor
    const cursor = document.createElement('span');
    cursor.innerHTML = '▋';
    cursor.style.animation = 'blink 1s infinite';
    hackerTextElement.appendChild(cursor);

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            displayText += ' ';
            hackerTextElement.textContent = displayText;
            hackerTextElement.appendChild(cursor);
            await new Promise(resolve => setTimeout(resolve, 20)); // Reduced from 50
            continue;
        }

        for (let j = 0; j < 15; j++) {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32);
            hackerTextElement.textContent = displayText + randomChar;
            hackerTextElement.appendChild(cursor);
            await new Promise(resolve => setTimeout(resolve, 18)); // Reduced from 25
        }

        displayText += text[i];
        hackerTextElement.textContent = displayText;
        hackerTextElement.appendChild(cursor);
        await new Promise(resolve => setTimeout(resolve, 15)); // Reduced from 50
    }
}

// Add cursor blink animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Start the effect when page loads
window.addEventListener('load', printHackerStyle);
