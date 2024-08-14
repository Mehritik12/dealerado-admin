import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryModalStatus, setFormDetails, setUserModalStatus } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import { addCategory, getCategory, updateCategory } from '../../../../redux/features/category/_categoryAction';
import ReactSelect from 'react-select';
import { ROLES } from '../../../../constants';

function UserModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);
  const categoryFormValidation = Yup.object().shape({
    firstName: Yup.string().trim().required('Field is required'),
    lastName: Yup.string().trim().required('Field is required'),
    email: Yup.string().trim().required('Field is required'),
    mobileNumber: Yup.string().trim().required('Field is required'),
  });


  const formValues = {
    firstName: sharedActions.formDetails.name || '',
    role: sharedActions.formDetails.role || 'user',
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
    dispatch(setUserModalStatus(false))
    dispatch(setFormDetails({}))
  }

  return (
    <>

      <Modal show={sharedActions.userModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{!sharedActions.formDetails._id ? 'Add' : 'Update'} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <FormikProvider value={categoryFormik}>
            <Form onSubmit={categoryFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>User Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                    <Field
                      name="firstName"
                      validate={categoryFormValidation}
                      type="text"
                      label="First Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Field
                      name="lastName"
                      validate={categoryFormValidation}
                      type="text"
                      label="Last Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                  <Field
                      name="email"
                      validate={categoryFormValidation}
                      type="text"
                      label="Email"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Field
                      name="mobileNumber"
                      validate={categoryFormValidation}
                      type="text"
                      label="Mobile"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <ReactSelect
                      name="role"
                      placeholder="Role"
                      options={ROLES}
                      onChange={(e)=>categoryFormik.setFieldValue('role',e)}
                    />
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

export { UserModal };