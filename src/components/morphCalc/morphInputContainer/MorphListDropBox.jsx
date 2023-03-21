import MorphButton from './MorphButton';
import { ButtonUl } from './MorphInputContainer.styled';

const MorphListDropBox = ({ morphList, insert }) => {
  return (
    <ButtonUl>
      {morphList.length === 0 ? (
        <div>일치하는 모프가 없습니다.</div>
      ) : (
        morphList.map((morph) => (
          <li key={morph.id}>
            <MorphButton morph={morph} insert={insert} />
          </li>
        ))
      )}
    </ButtonUl>
  );
};

export default MorphListDropBox;