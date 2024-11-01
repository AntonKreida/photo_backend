import { forwardRef } from 'react';
import { Textarea, Field } from '@strapi/design-system';

export const Input = forwardRef((props: any, ref: any) => {
  const { attribute, name, onChange, value, error, hint } = props; // these are just some of the props passed by the content-manager

  const handleChange = (e: any) => {
    onChange({
      target: { name, type: attribute.type, value: e.currentTarget.value },
    });
  };

  return (
    <Field.Root id={name} error={error} hint={hint}>
      <Field.Label>{name}</Field.Label>
      <Textarea
        id={name}
        name={name}
        error={error}
        value={value}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
      <Field.Error />
      <Field.Hint />
    </Field.Root>
  );
});
