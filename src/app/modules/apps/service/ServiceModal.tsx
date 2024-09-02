import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setServiceModalStatus,
  setFormDetails,
} from "../../../../redux/features/shared/sharedSlice";
import { Field, FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import FieldInputText from "../common/InputFeilds/InputTextField";
import * as Yup from "yup";
import { addNewService, updateService } from "../../../../redux/features/service/_serviceAction";
import FieldInputFile from "../common/InputFeilds/InputFile";

function ServiceModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);

  const formValidation = Yup.object().shape({
    name: Yup.string().trim().required("Field is required"),
    description: Yup.string().trim().required("Field is required"),
  });

  const formValues = {
    name: sharedActions.formDetails.name || "",
    description: sharedActions.formDetails.description || "",
    image: sharedActions.formDetails.image || "",
  };

  const categoryFormik = useFormik({
    initialValues: formValues,
    validationSchema: formValidation,
    onSubmit: (values: any) => {
      const formData = new FormData();
      if (sharedActions.formDetails._id) {
        formData.append("name", values.name);
        formData.append("description", values.description);
        if (values.image) {
          formData.append("image", values.image);
        }
        dispatch(updateService({_id:sharedActions.formDetails._id,formData:formData,type:'service',parentId:""}));
      }else{
        formData.append("name", values.name);
        formData.append("description", values.description);
        if (values.image) {
          formData.append("image", values.image);
        }
        dispatch(addNewService(formData));
      }
    },
  });

  const closeModal = () => {
    dispatch(setServiceModalStatus(false));
    dispatch(setFormDetails({}));
  };

  return (
    <>
      <Modal
        show={sharedActions.serviceModal}
        onHide={closeModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {!sharedActions.formDetails._id ? "Add" : "Update"} Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={categoryFormik}>
            <Form onSubmit={categoryFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="name"
                      validate={formValidation}
                      type="text"
                      label="Service"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>

                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="description"
                      validate={formValidation}
                      type="text"
                      label="Description"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 mb-6">
                  <div className="col-sm-12 mb-6">
                    <Form.Group>
                      <label htmlFor="image">Image</label>
                      <Field name="image" component={FieldInputFile} />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <Button type="submit" className="primaryBtn w-100 active">
                {!sharedActions.formDetails._id ? "Add" : "Update"}
              </Button>
            </Form>
          </FormikProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { ServiceModal };