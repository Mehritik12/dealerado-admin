import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setServiceModalStatus,
  setFormDetails,
  setSubServiceModalStatus,
} from "../../../../redux/features/shared/sharedSlice";
import { Field, FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import FieldInputText from "../common/InputFeilds/InputTextField";
import * as Yup from "yup";
import { addNewService, addNewSubService, updateService } from "../../../../redux/features/service/_serviceAction";
import FieldInputFile from "../common/InputFeilds/InputFile";
import { useParams } from "react-router-dom";
import { REQUIRED } from "../../../../utils/const";

function SubServiceModal() {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);

  const subServiceFormValidation = Yup.object().shape({
    name: Yup.string().trim().required(REQUIRED),
    description: Yup.string().trim().required(REQUIRED),
    price: Yup.string().trim().required(REQUIRED),
  });

  const formValues = {
    name: sharedActions.formDetails.name || "",
    description: sharedActions.formDetails.description || "",
    image: sharedActions.formDetails?.image,
    price: sharedActions.formDetails.price || "",
  };

  const categoryFormik = useFormik({
    initialValues: formValues,
    validationSchema: subServiceFormValidation,
    onSubmit: (values: any) => {
      const formData = new FormData();
      if (sharedActions.formDetails._id) {
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("price", values.price);
        if (values.image) {
          formData.append("image", values.image);
        }
        dispatch(updateService({_id:sharedActions.formDetails._id,formData:formData,type:'subService',parentId:id}))
      } else {
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("price", values.price);
        if (values.image) {
          formData.append("image", values.image);
        }
        if (id) {
          formData.append("parentId", id);
          dispatch(addNewSubService({ formData: formData, _id: id }));
        }
      }
    },
  });

  const closeModal = () => {
    dispatch(setSubServiceModalStatus(false));
    dispatch(setFormDetails({}));
  };

  return (
    <>
      <Modal
        show={sharedActions.subServiceModal}
        onHide={closeModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {!sharedActions.formDetails._id ? "Add" : "Update"} Sub Service
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
                      validate={subServiceFormValidation}
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
                      validate={subServiceFormValidation}
                      type="text"
                      label="Description"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="price"
                      validate={subServiceFormValidation}
                      type="number"
                      label="Price"
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