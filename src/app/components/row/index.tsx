import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";

export function Row({ title, children }: any) {
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div className={styles.row} ref={ref}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.items}>
          {children}
        </div>
      </div>
    </FocusContext.Provider>
  );
}