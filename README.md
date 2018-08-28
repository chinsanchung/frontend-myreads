# MyReads Project
## Tools
- OS : Windows 10 Home
- language: HTML, CSS, JavaScript
- tools : Atom text editor, Github Desktop, React(create-react-app)

## Preparations
- At first, you should install NPM at the project folder. `npm install`
- Second, Link and Route component need react-router-dom. Install it. `npm install --save react-router-dom`

## Funtion
- At main page, there are list of books from Book Lender API.
- All books are classfied by shelf. "Currently Reading", "Want to Read", "Read".
- Each book has select tag. It changes book's shelf.
- '+' button has link to search page. Search page has input tag to type keywords. It will find books by using keywords. If there is no result, a sentence shows "No keywords in the data."
- a Book that displayed from searching also can change it's shelf. After changing shelf and go back to the main page, new list will come out.

## What I did
- Make child components(BookShelf, BookList, SearchPage) and I connected these with App component.
- Store data in component's state, and use them for displaying web page.
- Make functions such as changing and classifying shelf, saving texts that user typed, showing result that user searched.
- Changing a tag to Link component.
- Give URL to main, search page by using Route component.

## Reference
- [W3Schools](https://www.w3schools.com/)
- [W3C ARIA in HTML](https://w3c.github.io/html-aria/)
- [MDN web docs](https://developer.mozilla.org/ko/)
- [React docs](https://reactjs.org/docs/getting-started.html)
- [stackoverflow](https://stackoverflow.com/)

## Images
![read01](https://github.com/chinsanchung/frontend-myreads/blob/master/images/myread01.jpg)
![read02](https://github.com/chinsanchung/frontend-myreads/blob/master/images/myread02.jpg)
