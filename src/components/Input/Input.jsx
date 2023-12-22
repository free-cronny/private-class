/* eslint-disable react/prop-types */
import * as G from '../../styles/styles'

const InputComponent = (props) => {
    return (
        <div>
            <G.Input onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputComponent