import * as React from 'react';
import { Form } from 'react-bootstrap';
import { getIn } from 'formik';

const FieldInputCheckbox = ({ field, form, ...props }: any) => {
    const error = getIn(form.errors, field.name);
    const touch = getIn(form.touched, field.name);

    return (
        <Form.Group className="mb-3">
            <Form.Check
                id={props.id || field.name}
                type="checkbox"
                label={props.label}
                {...field}
                {...props}
                checked={field.value}
            />
            {touch && error ? (
                <span style={{ color: '#ff8080', marginTop: '5px', fontSize: '13px' }} className="error text-capitalize">
                    {error}
                </span>
            ) : null}
        </Form.Group>
    );
};

export default FieldInputCheckbox;
