import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { isEmptyObj, k2c } from '../../helpers/units'
import { TodayGeneral } from './General'
import { TodayDetails } from './Details'

class Today extends Component{

  render(){

    const { current } = this.props

    const degrees = current && current.main ? k2c(current.main.temp) : null


    return(
      <div className='container__today'>
        <TodayGeneral degrees={degrees}/>
        <TodayDetails current={current}/>
      </div>
    )
  }

}

const stateToProps = ({state}) => ({ current: !isEmptyObj(state.current) ? state.current : null}) 

export default connect(stateToProps, {  })(Today)