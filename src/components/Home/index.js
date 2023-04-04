import {Component} from 'react'

class Home extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    console.log(response)
    console.log(data)
  }

  render() {
    return <p>test</p>
  }
}

export default Home
