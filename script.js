document.addEventListener('DOMContentLoaded', function () {
    const terminal = document.getElementById('terminal');
    const inputElement = createInputElement();
    terminal.appendChild(inputElement);

    // Each entry in the commandHistory array will now be an object with 'command' and 'response' properties
    const commandHistory = [{ command: 'Type help for a list of commands', response: '' }];

    let historyIndex = 0; // Index to navigate command history

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = inputElement.value;
            const response = handleCommand(command);
            commandHistory.push({ command, response }); // Add command and response to history
            historyIndex = commandHistory.length; // Reset history index
            displayCommandResponse(command, response);
            inputElement.value = ''; // Clear the input value
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            // Navigate command history in reverse
            if (historyIndex > 0) {
                historyIndex--;
                inputElement.value = commandHistory[historyIndex].command;
            }
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            // Navigate command history forward
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputElement.value = commandHistory[historyIndex].command;
            } else if (historyIndex === commandHistory.length - 1) {
                // Clear input when reaching the end of history
                inputElement.value = '';
            }
        }
    });

    function createInputElement() {
        const input = document.createElement('input');
        input.classList.add('input');
        return input;
    }

    function displayCommandResponse(command, response) {
        // Construct the entire content including command history, current command, and response
        const terminalContent = commandHistory
            .map((entry) => `<p><span class="prompt">thatrtxdude@website:~$</span> ${entry.command}</p><p>${entry.response}</p>`)
            .join('');

        // Update the terminal content
        terminal.innerHTML = terminalContent;

        terminal.scrollTop = terminal.scrollHeight;

        // Focus and scroll to the new input box after displaying the command and response
        terminal.appendChild(inputElement);
        inputElement.focus();
    }

    function handleCommand(command) {
        switch (command.toLowerCase()) {
            case 'ls':
                return 'info.txt setup.txt socials.txt credits.txt';
            case 'cat info.txt':
                return "professional slop creator, wannabe level designer, whatever you wanna call me. i make shit for the source engine, be it maps, models or textures. i do a bit of everything. besides animating, fuck that.";
            case 'cat setup.txt':
                return 'XFX Radeon 6800XT, Ryzen 7 5800x3D, 32GB DDR4 3200Mhz, Razer Huntsman Mini, Razer Deathadder v2 X Hyperspeed, Beyerdynamic DT770 PRO, NZXT Capsule Mic, Logitech G27 + H-Shifter';
            case 'cat socials.txt':
                return '<a href="https://steamcommunity.com/id/thatrtxdude/">Steam</a> | <a href="https://github.com/thatrtxdude">Github</a> | <a href="https://twitter.com/thatrtxdude_">Twitter/X</a> | Discord: thatrtxdude | Matrix: @thatrtxdude:matrix.org';
            case 'help':
                return 'Available commands: ls (List all files), cat (Open .txt files), help, clear';
            case 'cat credits.txt':
                return "me, thatrtxdude, for everything";
            case 'gmod eft ready or not realism reshade 4k ultra hd hdr lighting':
                return "oh may the lord smite you down";
            case 'cat':
                return 'Please enter a file to open!'
            case 'clear':
                // Clear the command history
                commandHistory.length = 0;
                return '';
            default:
                return 'Command not recognized';
        }
    }

    // Optional: Add initial command and response
    displayCommandResponse('Type help for more information', '');
});
