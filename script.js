/*
MIT License
Copyright (c) 2026 Shafin Ahmed
See LICENSE file for details.
*/

const text = "Hello World!\nI'm Shafin Ahmed.\nNice to meet you!";
const hackerTextElement = document.getElementById('hackerText');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function printHackerStyle() {
    let displayText = '';

    const cursor = document.createElement('span');
    cursor.innerHTML = '▋';
    cursor.style.animation = 'blink 1s infinite';
    hackerTextElement.style.whiteSpace = 'pre';
    hackerTextElement.appendChild(cursor);

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char !== ' ') {
            const count = Math.floor(Math.random() * 35) + 1;
            for (let j = 0; j < count; j++) {
                const randomChar = String.fromCharCode(Math.floor(Math.random() * 95) + 32);
                hackerTextElement.textContent = displayText + randomChar;
                hackerTextElement.appendChild(cursor);
                await sleep(10);
            }
        }

        displayText += char;
        hackerTextElement.textContent = displayText;
        hackerTextElement.appendChild(cursor);

        if (i + 1 < text.length && text[i + 1] === '\n') {
            i++;
            displayText += '\n';
            hackerTextElement.textContent = displayText;
            hackerTextElement.appendChild(cursor);
            await sleep(1500);
        }
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
