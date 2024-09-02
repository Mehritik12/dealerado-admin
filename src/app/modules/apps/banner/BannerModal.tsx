import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerModalStatus, setFormDetails } from '../../../../redux/features/shared/sharedSlice';
import { Field, FormikProvider, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import FieldInputText from '../common/InputFeilds/InputTextField';
import * as Yup from "yup";
import { addBanner, updateBanner } from '../../../../redux/features/banner/_bannerAction';
import { REQUIRED } from '../../../../utils/const';
import FieldInputFile from '../common/InputFeilds/InputFile';

function BannerModal() {
  const dispatch:any = useDispatch();
  const sharedActions = useSelector((state:any) => state.sharedActions);

  const bannerFormValidation = Yup.object().shape({
    name: Yup.string().trim().required(REQUIRED),
    image: Yup.mixed().required(REQUIRED),
  });

  const formValues = {
    name: sharedActions.formDetails.name || "",
    image: sharedActions.formDetails.image || "",
  };

  const bannerFormik = useFormik({
    initialValues: formValues,
    validationSchema: bannerFormValidation,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.image && values.image instanceof File) {
        formData.append("image", values.image);
      }
      if (sharedActions.formDetails._id) {
        dispatch(updateBanner({formData:formData, _id: sharedActions.formDetails._id }));
      } else {
        dispatch(addBanner(formData));
      }
    },
  });

  const closeModal = () => {
    dispatch(setBannerModalStatus(false));
    dispatch(setFormDetails({}));
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
                      type="text"
                      label="Title"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 mb-6">
                  <Form.Group controlId="formFile" className="mb-3">
                    <label htmlFor="image">Image</label>
                    <Field name="image" component={FieldInputFile} />
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

export { BannerModal };
