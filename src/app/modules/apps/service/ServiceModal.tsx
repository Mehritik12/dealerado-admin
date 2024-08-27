import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setServiceModalStatus, setFormDetails } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import { addCategory, getCategory, updateCategory } from '../../../../redux/features/category/_categoryAction';

function ServiceModal() {
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
    image: sharedActions.formDetails.description||"",
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
      dispatch(setServiceModalStatus(false))
      dispatch(setFormDetails({}))
      setTimeout(() => {
        dispatch(getCategory({ page: 1, limit: 10 }));
      }, 100);
    },      
  });

  const closeModal = () => {
    dispatch(setServiceModalStatus(false))
    dispatch(setFormDetails({}))
  }

  return (
    <>

      <Modal show={sharedActions.serviceModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{!sharedActions.formDetails._id ? 'Add' : 'Update'} Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <FormikProvider value={categoryFormik}>
            <Form onSubmit={categoryFormik.handleSubmit}>
              <div className="row">
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

export { ServiceModal };