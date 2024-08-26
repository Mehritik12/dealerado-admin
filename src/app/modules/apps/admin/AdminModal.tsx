import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdminModalStatus,
  setFormDetails,
  setUserModalStatus,
} from "../../../../redux/features/shared/sharedSlice";
import { Field, FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import FieldInputText from "../common/InputFeilds/InputTextField";
import * as Yup from "yup";
import {
  addNewUser,
  getUsers,
  updateUser,
} from "../../../../redux/features/user/_userAction";
import {
  INDIAN_PHONE_REGEX,
  INVALID_PHONE,
  REQUIRED,
} from "../../../../utils/const";
import EyeIcon from "../../../icons/EyeIcon";
function UserModal() {
  const [showPassword,setShowPassword] =React.useState(false)
  const role = 'admin'
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);
  const userFormValidation = Yup.object().shape({
    name: Yup.string().trim().required(REQUIRED),
    email: Yup.string().trim().email().required(REQUIRED),
    // mobileNumber: Yup.string()
    //   .trim()
    //   .matches(INDIAN_PHONE_REGEX, INVALID_PHONE)
    //   .required(REQUIRED),
    password: Yup.string().trim().required(REQUIRED)
  });

  const formValues = {
    name: sharedActions.formDetails.name || "",
    email: sharedActions.formDetails.email || "",
    password: "",
  };

  const userFormik = useFormik({
    initialValues: formValues,
    validationSchema: userFormValidation,
    onSubmit: (values: any) => {
      if (sharedActions.formDetails._id) {
        dispatch(updateUser({ ...values, _id: sharedActions.formDetails._id, role : role }))
      } else {
        values.role = role;
        dispatch(addNewUser(values))
      }
    },
  });

  const closeModal = () => {
    dispatch(setAdminModalStatus(false));
    dispatch(setFormDetails({}));
  };

  return (
    <>
      <Modal
        show={sharedActions.adminModal}
        onHide={closeModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {!sharedActions.formDetails._id ? "Add" : "Update"} Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={userFormik}>
            <Form onSubmit={userFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="name"
                      validate={userFormValidation}
                      type="text"
                      label="Name"
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
                    <div className="position-relative">
                    <Field
                      name="password"
                      validate={userFormValidation}
                      type={showPassword ?"text":"password"}
                      label="Password"
                      component={FieldInputText}
                    />
                    <button
                        onClick={()=>{setShowPassword(!showPassword)}}
                        type="button"
                        className="eyeBtn"
                      >
                        <EyeIcon/>
                      </button>
                    </div>
                  </Form.Group>
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

export { UserModal };
