# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## 📋 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### 📸 Screenshot

![](./src/images/Screen%20Shot%202025-01-14%20at%2013.33.24.png)

### 🔗 Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Vercel](https://interactive-rating-component-gamma-eight.vercel.app)

## My process

### 🛠️ Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/)

### 📚 What I learned

One of the most interesting things I learned during this challenge was how to customize radio buttons to make them look more modern and interactive. Instead of styling the `input` itself, I focused on styling the `label` to give it a button-like appearance. This technique improves the overall user experience, making the rating buttons more visually appealing and intuitive.

```html
<div class="rate-btn">
  <input type="radio" name="rating" class="radio" id="1" value="1" />
  <label for="1" class="radio-container">1</label>
</div>
```
```css
input[type="radio"] {
    opacity: 0;
    position: absolute;
    pointer-events: none;
}

label {
    width: 2.625rem;
    height: 2.625rem;
    background-color: var(--dark-blue);
    border-radius: 50%;
    padding-top: 2px;

    font-weight: 700;
    line-height: 1.5rem;

    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

input[type="radio"]:checked + label{
    background-color: var(--orange);
    color: var(--dark-blue);
}
```

### 💡 Continued development

Although I learned a lot about customizing radio inputs, there's still so much to explore in form customization. I'm excited to continue improving my CSS skills to create more interactive and accessible forms in future projects.

### 📖 Useful resources

- [MDN: Input radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - This helped me to comprehend `input radio` a bit better.
- [W3Schools: How to customize checkboxes](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp ) - This is great reference on how to customize inputs.

## 👤 Author

- Github - [GMarqz](https://github.com/GMarqz)
- Frontend Mentor - [@GMarqz](https://www.frontendmentor.io/profile/GMarqz)