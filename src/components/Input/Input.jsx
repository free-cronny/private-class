/* eslint-disable react/prop-types */
import * as S from '../../styles/styles'

const InputComponent = (props) => {
    return (
        <div>
            <S.Input onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputComponent