import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

// Libs
const API_KEY = 'AIzaSyBmi5BCNY2AhhxiQJNrApIKI9Tlg_F8QtQ'

// Components
// Create a new component.
// This component should produce some HTML
// Class based component
export const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// make sure this component gets put into the DOM. ( ReactDOM.render())
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
