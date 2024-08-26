import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerModalStatus, setFormDetails } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import { addBanner, getBanner, updateBanner } from '../../../../redux/features/banner/_bannerAction';
import FieldSelectInput from '../common/InputFeilds/InputSelectField';

function BannerModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);


  const bannerFormValidation = Yup.object().shape({
    name: Yup.string().trim().required('Field is required'),
    type: Yup.string().trim().required('Field is required'),
    image: Yup.string().trim().required('Field is required'),
  });


  const formValues = {
    name: sharedActions.formDetails.name || '',
    type: sharedActions.formDetails.type || '',
    image: sharedActions.formDetails.image || 'https://s3.ap-south-1.amazonaws.com/dealeradokstorage/1718864818079.png',
  };

  const bannerFormik = useFormik({
    initialValues: formValues,
    validationSchema: bannerFormValidation,
    onSubmit: (values: any) => {
      if (sharedActions.formDetails._id) {
        dispatch(updateBanner({ ...values, id: sharedActions.formDetails._id }))
      } else {
        dispatch(addBanner(values))
      }
      dispatch(setBannerModalStatus(false))
      dispatch(setFormDetails({}))
      setTimeout(() => {
        dispatch(getBanner({ page: 1, limit: 10 }));
      }, 100);
    },
  });

  const closeModal = () => {
    dispatch(setBannerModalStatus(false))
    dispatch(setFormDetails({}))
  }



  return (
    <>

      <Modal show={sharedActions.bannerModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{!sharedActions.formDetails._id ? 'Add' : 'Update'} Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={bannerFormik}>
            <Form onSubmit={bannerFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                
                  <Form.Group>
                    <Field
                      name="name"
                      validate={bannerFormValidation}
                      type="text"
                      label="Name"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="type"
                      validate={bannerFormValidation}
                      type="text"
                      label="Type"
                      options={['TOP', 'MIDDLE', 'BOTTOM']} 
                      component={FieldSelectInput}  
                    /> 
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label> Image</Form.Label>
                  <Form.Control type="file"
            
                  accept="image/*" />
                </Form.Group>
                </div>
                <div className="col-sm-6">
              
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

export { BannerModal };