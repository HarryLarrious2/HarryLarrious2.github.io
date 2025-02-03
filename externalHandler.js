window.addEventListener('message', function(event) {
    // Allow all origins
    event.source.postMessage('Message received', '*');

    // Process the received data
    var receivedData = event.data;
    
    // Print the message to console
    console.log('Message received from ' + event.origin + ':', receivedData);

    // Display the message in the list
    var messageList = document.getElementById('messageList');
    var messageItem = document.createElement('p');
    messageItem.textContent = 'From ' + event.origin + ': ' + JSON.stringify(receivedData);
    messageList.appendChild(messageItem);

    // Scroll to the bottom of the list
    messageList.scrollTop = messageList.scrollHeight;
}, false);