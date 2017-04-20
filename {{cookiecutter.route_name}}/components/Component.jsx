import React from 'react'
// import { FormattedMessage } from 'react-intl'

import BaseComponent from 'core/BaseComponent'
import Loading from 'components/ux/Loading'
import ErrorMsg from 'components/ux/ErrorMsg'

export default class {{cookiecutter.route_name}} extends BaseComponent {
  constructor (props) {
    super(props)

    // this._bind('')
  }

  render () {
    let {{cookiecutter.route_name|lower}} = this.props.state.{{cookiecutter.route_name|lower}}

    if ({{cookiecutter.route_name|lower}}.error) {
      return <ErrorMsg msgId={{"{"}}{{cookiecutter.route_name|lower}}.error{{"}"}} />
    } else if ({{cookiecutter.route_name|lower}}.loading) {
      {% raw %}return (
        <div className='container-fluid'>
          <Loading style={{left: '50%'}} />
        </div>
      ){% endraw %}
    } else {
      return (
        <div>
            {{cookiecutter.route_name}}
        </div>
      )
    }
  }
}
