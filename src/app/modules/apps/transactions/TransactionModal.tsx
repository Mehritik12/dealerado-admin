import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setAddMoneyModalStatus } from "../../../../redux/features/shared/sharedSlice";
import { Field, FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import FieldInputText from "../common/InputFeilds/InputTextField";
import * as Yup from "yup";
import { REQUIRED, } from "../../../../utils/const";
import { addMoney } from "../../../../redux/features/transaction/_transactionAction";
function TransactionModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);

  const userFormValidation = Yup.object().shape({
    amount: Yup.number().required(REQUIRED),
  });

  const formValues = {
    amount: 100,
    transactionType:"Points Added"
  };

  const walletFormik = useFormik({
    initialValues: formValues,
    validationSchema: userFormValidation,
    onSubmit: (values: any, { resetForm }) => {
      if (sharedActions.formDetails && sharedActions.formDetails._id) {
        values.userId = sharedActions.formDetails._id
        values.type = 'CREDIT'
        dispatch(addMoney(values))
      }
    },
  });

  const closeModal = () => {
    dispatch(setAddMoneyModalStatus(false));
  };

  return (
    <>
      <Modal
        show={sharedActions.addMoneyModal}
        onHide={closeModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add Money
            {/* {!sharedActions.formDetails._id ? "Add" : "Update"} User */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={walletFormik}>
            <Form onSubmit={walletFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 mb-6">
                  <Form.Group>
                    <Field
                      name="amount"
                      validate={userFormValidation}
                      type="number"
                      label="Amount"
                      component={FieldInputText}
                    />
                  </Form.Group>
                </div>
              </div>
              <Button type="submit" className="primaryBtn w-100 active">
                Submit
              </Button>
            </Form>
          </FormikProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { TransactionModal };
