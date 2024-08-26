import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryModalStatus, setFormDetails } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import { addCategory, getCategory, updateCategory } from '../../../../redux/features/category/_categoryAction';

function CategoryModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);


  const categoryFormValidation = Yup.object().shape({
    name: Yup.string().trim().required('Field is required'),
    description: Yup.string().trim().required('Field is required'),
    image: Yup.string().trim().required('Field is required'),
  });


  const formValues = {
    name: sharedActions.formDetails.name || '',
    description: sharedActions.formDetails.description || '',
    image: sharedActions.formDetails.description || 'https://s3.ap-south-1.amazonaws.com/dealeradostorage/1718864818079.png',
  };

  const categoryFormik = useFormik({
    initialValues: formValues,
    validationSchema: categoryFormValidation,
    onSubmit: (values: any) => {
      if (sharedActions.formDetails._id) {
        dispatch(updateCategory({ ...values, id: sharedActions.formDetails._id }))
      } else {
        dispatch(addCategory(values))
      }
      dispatch(setCategoryModalStatus(false))
      dispatch(setFormDetails({}))
      setTimeout(() => {
        dispatch(getCategory({ page: 1, limit: 10 }));
      }, 100);
    },      
  });

  const closeModal = () => {
    dispatch(setCategoryModalStatus(false))
    dispatch(setFormDetails({}))
  }

  return (
    <>

      <Modal show={sharedActions.categoryModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{!sharedActions.formDetails._id ? 'Add' : 'Update'} Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <FormikProvider value={categoryFormik}>
            <Form onSubmit={categoryFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Category Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                  <Form.Group>
                    <Field
                      name="name"
                      validate={categoryFormValidation}
                      type="text"
                      label="Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="description"
                      validate={categoryFormValidation}
                      type="text"
                      label="Description"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group>

                  </Form.Group>
                </div>


              </div>
              <Button
                type="submit"
                className="primaryBtn w-100 active"
              >
                {!sharedActions.formDetails._id ? 'Add' : 'Update'}
              </Button>
            </Form>
          </FormikProvider>

        </Modal.Body>

      </Modal>
    </>
  );
}

export { CategoryModal };