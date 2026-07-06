import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";
import { useEffect } from "react";

export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  const { ref, focused, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, []);

  console.log("focused", focused);

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
