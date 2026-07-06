import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";

export interface ButtonProps {
  label: string;
  focusKey: string;
  onSelect?: () => void;
}

export function Button({ label, focusKey, onSelect }: ButtonProps) {
  const { ref, focused, focusSelf } = useFocusable({
    focusKey,
    onEnterPress: () => onSelect?.(),
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
