import { useEffect } from "react";
import type { ReactNode } from "react";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";

interface RowProps {
  title: string;
  children: ReactNode;
  defaultFocus?: boolean;
  preferredChildFocusKey?: string;
}

export function Row({ title, children, defaultFocus, preferredChildFocusKey }: RowProps) {
  const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
    preferredChildFocusKey,
    trackChildren: true,
  });

  useEffect(() => {
    if (defaultFocus) {
      focusSelf();
    }
  }, [defaultFocus, focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div className={`${styles.row} ${!hasFocusedChild ? styles.inactive : ""}`} ref={ref}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.items}>
          {children}
        </div>
      </div>
    </FocusContext.Provider>
  );
}