import { IMultiToggleBox } from './types';
import { Toggle, ToggleContainer } from './styles';

export function MultiToggleBox({ currentValue, toggles }: IMultiToggleBox) {
  return (
    <ToggleContainer>
      {toggles?.map((e) => (
        <Toggle isActive={currentValue == e.value}>
          <button
            onClick={(event) => {
              event.preventDefault();
              e.onChange(e.value);
            }}
          >
            {e.text}
          </button>
        </Toggle>
      ))}
    </ToggleContainer>
  );
}
