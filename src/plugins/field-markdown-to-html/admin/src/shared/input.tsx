import { forwardRef } from 'react';
import { useIntl } from 'react-intl';

export const Input = forwardRef((props: any, ref: any) => {
  const { attribute, disabled, name, onChange, required, value, type, } = props; // these are just some of the props passed by the content-manager

  const { formatMessage } = useIntl();

  console.log(value);

  const handleChange = (e: any) => {
    onChange({
      target: { name, type: attribute.type, value: e.currentTarget.value },
    });
  };

  return (
    <label>
      <input
        ref={ref}
        name={name}
        disabled={disabled}
        value={value || ''}
        required={required}
        onChange={handleChange}
        type={type}
      />
    </label>
  );
});
