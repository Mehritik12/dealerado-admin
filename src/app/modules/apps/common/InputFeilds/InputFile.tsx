import * as React from 'react';

const FieldInputFile = ({ field, form, ...props }) => {
    const handleChange = (event) => {
      const file = event.currentTarget.files[0];
      form.setFieldValue(field.name, file);
    };
  
    return (
      <div>
        <input
          type="file"
          onChange={handleChange}
          {...props}
        />
        {form.touched[field.name] && form.errors[field.name] ? (
          <div className="error">{form.errors[field.name]}</div>
        ) : null}
      </div>
    );
  };


export default FieldInputFile;
