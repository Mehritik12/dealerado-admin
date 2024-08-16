import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setFormDetails, setUserModalStatus } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import ReactSelect from 'react-select';
import { ROLES } from '../../../../constants';
import Required from '../../../../components/common/Required';
import { addNewUser, getUsers, updateUser } from '../../../../redux/features/user/_userAction';

function UserModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);
  const userFormValidation = Yup.object().shape({
    firstName: Yup.string().trim().required('Field is required'),
    lastName: Yup.string().trim().required('Field is required'),
    email: Yup.string().trim().required('Field is required'),
    mobileNumber: Yup.string().trim().required('Field is required'),
    role: Yup.string().trim().required('Field is required'),
  });


  const formValues = {
    firstName: sharedActions.formDetails.firstName || '',
    lastName: sharedActions.formDetails.lastName || '',
    email: sharedActions.formDetails.email || '',
    mobileNumber: sharedActions.formDetails.mobileNumber || '',
    role: ROLES?.find((r)=>r.value==sharedActions.formDetails.role) || ROLES[2],
  };

  const userFormik = useFormik({
    initialValues: formValues,
    validationSchema: userFormValidation,
    onSubmit: (values: any) => {
      if (sharedActions.formDetails._id) {
        dispatch(updateUser({ ...values, id: sharedActions.formDetails._id }))
      } else {
        dispatch(addNewUser(values));
      }
      dispatch(setUserModalStatus(false))
      dispatch(setFormDetails({}))
      setTimeout(() => {
        dispatch(getUsers({ page: 1, limit: 10 }));
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
          <FormikProvider value={userFormik}>
            <Form onSubmit={userFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>User Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                    <Field
                      name="firstName"
                      validate={userFormValidation}
                      type="text"
                      label="First Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Field
                      name="lastName"
                      validate={userFormValidation}
                      type="text"
                      label="Last Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                  <Field
                      name="email"
                      validate={userFormValidation}
                      type="text"
                      label="Email"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Field
                      name="mobileNumber"
                      validate={userFormValidation}
                      type="text"
                      label="Mobile"
                      component={FieldInputText}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Role <Required/></Form.Label>
                    <ReactSelect
                      name="role"
                      placeholder="Role"
                      options={ROLES}
                      menuPlacement={'top'}
                      defaultValue={formValues.role}
                      onChange={(e)=>userFormik.setFieldValue('role',e)}
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