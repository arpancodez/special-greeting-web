# 🎉 Special Greeting Web

Create personalized greeting cards and messages with animations, countdown timers, and confetti effects. Perfect for New Year, birthdays, anniversaries and special occasions. Fully customizable with HTML, CSS, and JavaScript.

## 🌟 Features

- **Animated Title**: Colorful bouncing text with multiple colors
- **Countdown Timer**: Real-time countdown to the next New Year (Days, Hours, Minutes, Seconds)
- **Personalization**: Enter anyone's name for a custom greeting message
- **Confetti Animation**: Celebratory confetti effect on submit
- **Interactive Emojis**: Floating, animated emoji decorations on both sides
- **Canvas Particle System**: Beautiful animated particle background
- **Mouse Trail**: Draw colorful trails on the canvas while interacting
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries needed

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/arpancodez/special-greeting-web.git
cd special-greeting-web
```

2. Open `index.html` in your web browser
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

3. Or serve locally with a simple HTTP server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 📁 File Structure

```
special-greeting-web/
├── index.html       # HTML structure with greeting elements
├── style.css        # Styling and animations
├── script.js        # JavaScript for interactivity and countdown
└── README.md        # This file
```

## 📝 How to Use

1. Open the webpage in your browser
2. See the animated title and countdown timer
3. Enter the recipient's name in the input field
4. Click the "GO" button (or press Enter)
5. Watch the confetti animation and see the personalized message!

## 🎨 Customization

### Change the Countdown Target
Edit `script.js` line 12 to change the target date:
```javascript
const nextNewYear = new Date(currentYear + 1, 0, 1).getTime();
// Change to any date like: new Date(2025, 11, 25).getTime(); // Christmas
```

### Modify Messages
Edit the `messages` array in `script.js` (around line 42):
```javascript
const messages = [
    'Your custom message 1!',
    'Your custom message 2!',
    'Your custom message 3!'
];
```

### Change Colors
Edit `style.css` to customize colors:
- Background gradient (line 12)
- Text colors (.letter, .subtitle, etc.)
- Button colors (.go-btn)
- Animation colors in script.js

### Modify Greeting Title
Edit `index.html` line 35-42 to change the main title text:
```html
<h1 class="greeting-title" id="greetingTitle">
    <span class="letter">H</span>
    <span class="letter">A</span>
    <span class="letter">P</span>
    <span class="letter">P</span>
    <span class="letter">Y</span>
    <span class="letter">!</span>
</h1>
```

## 💡 Tips for Different Occasions

### Birthday Greeting
- Change countdown target to the birthday date
- Update greeting title to "HAPPY BIRTHDAY"
- Modify messages to birthday wishes

### Wedding Anniversary
- Set countdown to anniversary date
- Title: "HAPPY ANNIVERSARY"
- Use romantic messages

### Holiday Greeting
- Set countdown to holiday date
- Change title to the holiday name
- Use festive messages and emojis

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Explained

### Countdown Timer
- Automatically calculates remaining time to target date
- Updates every second
- Shows Days, Hours, Minutes, and Seconds

### Confetti Effect
- 50 confetti pieces created on each submission
- Random colors and animation speeds
- Automatically cleaned up after animation

### Particle System
- Runs on HTML5 Canvas
- Creates floating particles with gravity
- Responsive to window resize

### Mouse Trail
- Draw on the canvas while mouse is held down
- Creates colorful particle trail
- Automatically fades over time

## 🔧 Development

No build process needed! This is a vanilla JavaScript project:

```bash
# Just edit the files and refresh your browser
# All changes are applied immediately
```

## 📦 Deployment

Deploy easily to any static hosting platform:

- **Vercel** (Recommended for students)
- **GitHub Pages**
- **Netlify**
- **Firebase Hosting**
- **AWS S3**

### Deploy to Vercel (Free)
```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages
1. Push code to GitHub
2. Go to repository Settings
3. Enable GitHub Pages for main branch
4. Your site will be at: `https://username.github.io/special-greeting-web`

## 🤝 Share with Friends

1. Deploy to a hosting platform
2. Send the link to someone
3. They can enter their name and see the personalized greeting

## 📄 License

MIT License - Feel free to use and modify!

## 🌐 Live Demo

Try the example at: `https://github.com/arpancodez/special-greeting-web`

## 💬 Feedback

Found a bug or have a suggestion? Open an issue or create a pull request!

## 🎓 Learning Resources

This project uses:
- **HTML5**: Semantic markup and Canvas API
- **CSS3**: Animations, transitions, and gradients
- **Vanilla JavaScript**: DOM manipulation, event listeners, and requestAnimationFrame

Great for learning front-end web development!

---

**Made with ❤️ by Arpan Codez**
