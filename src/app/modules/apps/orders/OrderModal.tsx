import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setFormDetails, setOrderModalStatus, setUserModalStatus } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import ReactSelect from 'react-select';
import { ROLES, VEHICLE_SERVICE_TYPE, VEHICLE_STATUS } from '../../../../constants';
import Required from '../../../../components/common/Required';
import { addNewUser, getUsers, updateUser } from '../../../../redux/features/user/_userAction';

function OrderModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);
  const orderFormValidation = Yup.object().shape({
    vehicle: Yup.string().trim().required('Field is required'),
    status: Yup.string().trim().required('Field is required'),
    serviceType: Yup.string().trim().required('Field is required'),
  });


  const formValues = {
    vehicle: sharedActions.formDetails.vehicle || '',
    status: sharedActions.formDetails.status || '',
    serviceType: sharedActions.formDetails.serviceType || '',
    remark: sharedActions.formDetails.remark || ''
  };

  const userFormik = useFormik({
    initialValues: formValues,
    validationSchema: orderFormValidation,
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
    dispatch(setOrderModalStatus(false))
    dispatch(setFormDetails({}))
  }

  return (
    <>

      <Modal show={sharedActions.orderModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{!sharedActions.formDetails._id ? 'Add' : 'Update'} Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <FormikProvider value={userFormik}>
            <Form onSubmit={userFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Form.Label>Vehicle <Required/></Form.Label>
                    <ReactSelect
                      name="vehicle"
                      placeholder="Vehicle"
                      options={ROLES}
                      defaultValue={formValues.vehicle}
                      onChange={(e)=>userFormik.setFieldValue('vehicle',e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Service Type <Required/></Form.Label>
                    <ReactSelect
                      name="serviceType"
                      placeholder="Service Type"
                      options={VEHICLE_SERVICE_TYPE}
                      defaultValue={formValues.serviceType}
                      onChange={(e)=>userFormik.setFieldValue('serviceType',e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status <Required/></Form.Label>
                    <ReactSelect
                      name="status"
                      placeholder="Status"
                      options={VEHICLE_STATUS}
                      defaultValue={formValues.status}
                      onChange={(e)=>userFormik.setFieldValue('status',e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Remark </Form.Label>
                    <div>
                    <textarea
                      name="remark"
                      placeholder="Remark"
                      className='form-control'
                      defaultValue={formValues.remark}
                      onChange={(e)=>userFormik.setFieldValue('remark',e)}
                    />
                    </div>
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

export { OrderModal };