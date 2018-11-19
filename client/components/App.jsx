import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Mainbody from './Mainbody'

class App extends React.Component {
  constructor (props) {
    super(props)
    let today = new Date()
    let tmpYear = today.getFullYear()
    this.state = {
      year: tmpYear
    }

    this.changeYear = this.changeYear.bind(this)
  }

  changeYear () {
    let searchYear = document.getElementById('yearInput').value
    if ((searchYear.length > 4) || (searchYear.length < 4)) {
      alert('Please input correct year by YYYY fromat!')
      return
    }

    if (searchYear === String(this.state.year)) {
      alert('Same year!')
      return
    }

    this.setState({year: searchYear})
  }

  render () {
    // var indexYear = this.state.year
    return (
      <div>
        <Header/>
        <Mainbody />
        <Footer />

      </div>
    )
  }
}

export default App
