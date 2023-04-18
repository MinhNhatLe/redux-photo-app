import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'reactstrap';
import RandomPhoto from '../../components/RandomPhoto';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
}

function RandomPhotoField(props) {

    const { field, form, label } = props;
    const { name, value, onBlur } = field;

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    };
    return (
        <FormGroup>
            {label && <label for="name">{label}</label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
        </FormGroup>
    );
}

export default RandomPhotoField;