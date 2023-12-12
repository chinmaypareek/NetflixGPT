# Netflix GPT 🚀

- create-react-app
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef() Hook
- Firebase Setup
- Deploying our App to Production
- Create SignUp user account in firebase
- Implement Sign In User API
- Created Redux store with userSlice
- Implemented Sign out
- Update profile
- Bugfix: Signup user displayName update
- Bugfix: If the user is not loggged-in and try to access '/browse' manually, redirectTo '/' and vice-versa.
- Unsubscribed to the onAuthStateChange() callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB Now Playing Movie Lists API
- Custom Hook for nowPlayingMovies
- Create a movieSlice
- Update the store with movies data
- Planning for MainContainer and SecondaryContainer
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the YT video and make it autoplay and mute
- Tailwind classes to look MainContainer look awesome

# Features

- Login/Sign up
  - SignIn/SignUp Form
  - Redirects to browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Title & Description
    - MovieSuggestions
      - MovieLists\*N
- NetflixGPT
  - SearchBar
  - Movie Suggestions (using OpenAI API's)
