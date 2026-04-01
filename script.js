// Tarik Bhai Chat Functionality and Gemini API Integration

const apiKey = 'AIZA SyBhps31SndtCIaFnUKfVOq6Lp4Ye81bopc';
const chatContainer = document.getElementById('chat-container');
const inputField = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Function to send message to API
async function sendMessage(message) {
    const response = await fetch('https://api.gemini.com/v1/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ message })
    });
    return response.json();
}

// Function to display message in chat
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatContainer.appendChild(messageElement);
}

// Event listener for send button
sendButton.addEventListener('click', async () => {
    const message = inputField.value;
    displayMessage(message, 'You');
    inputField.value = '';
    const response = await sendMessage(message);
    displayMessage(response.reply, 'Tarik Bhai');
});

// Add any additional functionalities as required.