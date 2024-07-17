import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    
  render() {
    console.log('first')
    return (
      <div>Pure - {this.props.count}</div>
    )
  }
}

export default Pure