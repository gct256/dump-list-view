import * as React from "react";

/** Props for checkbox. */
type CheckboxProps = {
  initial?: boolean;
  label: string;
  onUpdate(checked: boolean): void;
};

/** Checkbox. */
export const Checkbox: React.VFC<CheckboxProps> = ({
  initial,
  label,
  onUpdate,
}: CheckboxProps): React.ReactElement | null => {
  const [checked, setChecked] = React.useState(initial ?? false);
  const handleOnChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(ev.target.checked);
      onUpdate(ev.target.checked);
    },
    [onUpdate],
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      <span>{label}</span>
    </label>
  );
};

Checkbox.displayName = "Checkbox";
