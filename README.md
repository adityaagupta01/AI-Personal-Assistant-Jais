
# Jais - Voice Assistant

### Overview
**Jais** is a voice-activated personal assistant developed in Python. It leverages speech recognition and synthesis to interact with users, execute commands, and perform everyday tasks such as opening Windows apps and websites. Jais is built to enhance productivity by offering voice control over commonly used actions.

---

## Features
- **Speech Recognition**: Jais listens to your voice commands using the `speech_recognition` library.
- **Speech Synthesis**: Responses are given using `pyttsx3` for a natural text-to-speech experience.
- **App Launcher**: Open Windows applications (e.g., Notepad, Calculator, etc.) with simple voice commands.
- **Web Navigation**: Jais can open websites directly from voice prompts.
- **Expandable Commands**: Easily add more commands to extend Jais’s functionality.
- **Multi-language Support**: Potential for local language voice recognition and responses.

---

## Installation

### Prerequisites
- Python 3.x
- Required Python libraries:
  - `speech_recognition`
  - `pyttsx3`
  - `webbrowser`
  - `os`

You can install the required libraries with:
```bash
pip install -r requirements.txt
```

### Clone the Repository
```bash
git clone https://github.com/YourUsername/Jais-Voice-Assistant.git
cd Jais-Voice-Assistant
```

---

## Usage
1. Run the Python script:
   ```bash
   python jais.py
   ```
2. Speak the following commands to interact with Jais:
   - "Open Notepad"
   - "Open Calculator"
   - "Open YouTube"
   - "Search for [topic] on Google"
   - And more!

3. Jais will listen and respond to your voice input, performing tasks accordingly.

---

## Customization

You can customize Jais by adding more commands. In the `jais.py` file, locate the section for commands and add your own using simple Python functions.

Example:
```python
def open_spotify():
    os.system("start spotify")
    
# Add this to your command-listening block
if 'spotify' in command:
    open_spotify()
```

---

## Contributing
Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
