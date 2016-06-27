import React from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentStyle from './ComponentStyle.postcss'
import BaseComponent from 'core/BaseComponent'

class {{cookiecutter.route_name|title}} extends BaseComponent {
  constructor (props) {
    super(props)

    this._initLogger()
    // this._bind('')
  }

  componentWillUnmount () {
    this.debug('componentWillUnmount')
  }

  render () {
  }
}

module.exports = {{cookiecutter.route_name|title}}
