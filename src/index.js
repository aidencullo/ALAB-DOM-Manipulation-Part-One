import "./styles.css";


// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main')

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr')




//part 2



// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
topMenuEl = document.querySelector('#top-menu')

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//   Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')
