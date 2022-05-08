import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: 'CodeMan',
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'CodeMan',
      })
    }, 2000)
  }

  render() {
    console.log('ParentComp')
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
