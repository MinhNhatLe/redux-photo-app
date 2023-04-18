import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {

    const {
        field, form,
        type, label, placeholder, disabled } = props;

    // Trong field có 4 cái là name, values, onChange, Onblur
    const { name } = field;

    const { errors, touched } = form;

    // sẽ show khi click vào rồi blur ra ngoài
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}

                invalid={showError}
            />

            {/* sử dụng compnent formik  có sẵn để ấy ErrorMessage ra 
            sử dụng component reatstrap để ấy Formfeedback ra  */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup >
    );
}

export default InputField;