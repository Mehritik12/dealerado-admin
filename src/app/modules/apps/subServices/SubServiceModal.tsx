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
import { addNewService } from "../../../../redux/features/service/_serviceAction";
import FieldInputFile from "../common/InputFeilds/InputFile";

function SubServiceModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);

  const categoryFormValidation = Yup.object().shape({
    name: Yup.string().trim().required("Field is required"),
    description: Yup.string().trim().required("Field is required"),
  });

  const formValues = {
    name: sharedActions.formDetails.name || "",
    description: sharedActions.formDetails.description || "",
    image: sharedActions.formDetails.description || "imageSrc",
  };

  const categoryFormik = useFormik({
    initialValues: formValues,
    validationSchema: categoryFormValidation,
    onSubmit: (values: any) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      if (values.image) {
        formData.append("image", values.image);
      }
      dispatch(addNewService(formData));
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
                      validate={categoryFormValidation}
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
                      validate={categoryFormValidation}
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

export { SubServiceModal };