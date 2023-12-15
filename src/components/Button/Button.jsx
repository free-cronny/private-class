/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import * as S from '../../styles/styles'

const ButtonComponent = (props) => {
    return (
        <div>
            <S.Button onClick={props.onClick} BackgroundHover={props.BackgroundHover} MarginButton={props.MarginButton} PaddingButton={props.PaddingButton} BackgroundColor={props.BackgroundColor}>{props.Text}</S.Button>
        </div>
    )
}

export default ButtonComponent
