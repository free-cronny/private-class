/* eslint-disable react/prop-types */
import * as S from '../../styles/styles';

const SelectComponent = (props) => {
  return (
    <div>
      <S.Select
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </div>
  );
};

export default SelectComponent;
