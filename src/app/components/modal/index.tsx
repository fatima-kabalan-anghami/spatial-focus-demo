import { useEffect } from "react";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./styles.module.scss";

interface ModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ModalButton({
  label,
  focusKey,
  variant,
  onSelect,
  isFirst,
  isLast,
}: {
  label: string;
  focusKey: string;
  variant: "confirm" | "cancel";
  onSelect: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const { ref, focused } = useFocusable({
    focusKey,
    onEnterPress: onSelect,
    onFocus: () => console.log(`[Modal][onFocus] ${focusKey}`),
    onBlur: () => console.log(`[Modal][onBlur] ${focusKey}`),
    onArrowPress: (direction) => {
      if (direction === "left" && isFirst) return false;
      if (direction === "right" && isLast) return false;
      return true;
    },
  });

  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[variant]} ${focused ? styles.focused : ""}`}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}

export function Modal({ title, message, onConfirm, onCancel }: ModalProps) {
  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: "modal-dialog",
    isFocusBoundary: true,
    trackChildren: true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <div className={styles.overlay}>
      <FocusContext.Provider value={focusKey}>
        <div className={styles.dialog} ref={ref}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.message}>{message}</p>
          <div className={styles.actions}>
            <ModalButton
              label="Cancel"
              focusKey="modal-cancel"
              variant="cancel"
              isFirst
              onSelect={onCancel}
            />
            <ModalButton
              label="Confirm"
              focusKey="modal-confirm"
              variant="confirm"
              isLast
              onSelect={onConfirm}
            />
          </div>
        </div>
      </FocusContext.Provider>
    </div>
  );
}
