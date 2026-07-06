import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";

export interface ButtonProps {
  label: string;
  focusKey: string;
  onSelect?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function Button({ label, focusKey, onSelect, isFirst, isLast }: ButtonProps) {
  const { ref, focused, focusSelf } = useFocusable({
    focusKey,
    onEnterPress: () => onSelect?.(),
    onFocus: () => console.log(`[onFocus] ${focusKey} gained focus`),
    onBlur: () => console.log(`[onBlur] ${focusKey} lost focus`),
    onArrowPress: (direction) => {
      if (direction === "left" && isFirst) {
        console.log(`[onArrowPress] ${focusKey} at start — blocked left`);
        return false;
      }
      if (direction === "right" && isLast) {
        console.log(`[onArrowPress] ${focusKey} at end — blocked right`);
        return false;
      }
      return true;
    },
  });

  return (
    <div
      ref={ref}
      onMouseEnter={focusSelf}
      className={`${styles.button} ${focused ? styles.focused : ""}`}
    >
      {label}
    </div>
  );
}
