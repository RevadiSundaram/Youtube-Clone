# Namaste Youtube
- [ ] Requirement Clarification
- [ ] Features
- [ ] Tech Stack -> Redux, Tailwind, react router, formic library, bundler, jest, react testing library
- [ ] Proper Justification for tech stacks
- [ ] Spend 5 mins on this


# Planning things
- [ ] Headers
- [ ] Sidebar
- [ ] Main page, top buttons
- [ ] If click on one video in main page, it open up that video into new page - /watch
- [ ] Comment section
- [ ] Spend 5-7 mins on planning, it is very important

# Components
- [ ] Header
- [ ] Side bar
- [ ] Body -> Button List, Video container
- [ ] Watch video comp

# Starting
- npx create-react-app YouTube-clone - we are executing it

# About create-react-app
- it has inbuilt webpack available
- it has inbuilt testing
- CRA takes care of postcsssrc for tailwind

# Axios
- no major use of axios 

# Best Practice
- Dont right away use map
- Make it work one one then scale it

# React Router
- appRouter 
- where you give router provider our app will render there

# App Router
- path and element is defined accordingly
- the app router path will perform where the outlet is

# HOC
- A function which takes the component and returns a new component

# need of HOC
- while doing small modification
- Eg: Ad is similar to videocard

# Interview Questions
- Search functionality
- if we are searching for something in youtube, it makes api call on every key strokes
- In flipkart, it makes api call on every key strokes, this is called debouncing

# Debouncing
- typing slow

# Performace:
- iphone 14 max = 14L * 1000 = 14000
- with debouncing = 3 api calls * 1000 = 3000 

# Debouncing with 200 ms:
- if diff btw key strokes is < 200 ms (typing too fast) - not call api (Decline API)
- if diff btw key strokes is > 200 ms (typing slow or nomal) - call API

# Return function in useEffect
- Used for cleanup

# Debouncing

key - i
- render comp
- useEffect is called
- start timer - make api call fater 200ms

key - ip
- render comp
- useEffect is called
- start timer - make api call fater 200ms




{
    Head
    Body
        Sidebar
            Menu Items
        Main Container
            ButtonsList
            Video Container
                Video Card
}