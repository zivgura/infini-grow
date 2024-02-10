import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.style';
import {ReactComponent as PlusIcon} from '../../assets/plus-icon.svg'

export default function Button({onClick, text}){
    return(
        <ButtonContainer onClick={onClick}>
            <PlusIcon />
            {text}
        </ButtonContainer>
    )
}
Button.propTypes={
    onClick: PropTypes.func,
    text: PropTypes.string
}
