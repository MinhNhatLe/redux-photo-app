import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import Select from 'react-select';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import * as Yup from "yup";

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const { isAddMode } = props;
    const initiaValues = {
        title: '',
        categoryId: null,
        photo: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        categoryId: Yup.number().required('This field is required').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired(),
        })
    })
    return (
        <Formik
            initialValues={initiaValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // do something here...s
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });
                return (
                    <Form>
                        {/* Này là sử dụng reactStrap 
                        <FormGroup>
                            <Label for="titleId">Title</Label>
                            <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
                        </FormGroup> */}
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        {/* <FormGroup>
                            <Label for="categoryId">Category</Label>
                            // npm i --save react-selects
                            <Select
                                id="categoryId"
                                name="categoryId"

                                placeholder="What's your photo category?"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                        </FormGroup> */}
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />


                        {/* ## Custom Field 

- Cầu nối giữa UI control và Formik.
- UI control là một controlled component với props: 
    - name: tên xác định control
    - value: giá trị của control
    - onChange: trigger hàm này với giá trị mới khi có thay đổi
    - onBlur: xác định khi nào thì control này bị touched */}
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        {/* <FormGroup>
                            <Label for="categoryId">Photo</Label>

                            <div><Button type="button" outline color="primary">Random a photo</Button></div>
                            <div>
                                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
                            </div>
                        </FormGroup> */}

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode ? 'Add to album' : 'Update your photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;