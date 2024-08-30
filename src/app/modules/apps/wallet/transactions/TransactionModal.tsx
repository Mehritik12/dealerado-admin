import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setAddMoneyModalStatus } from "../../../../../redux/features/shared/sharedSlice";
import { Field, FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import FieldInputText from "../../common/InputFeilds/InputTextField";
import * as Yup from "yup";
import { REQUIRED } from "../../../../../utils/const";
import { addMoney } from "../../../../../redux/features/transaction/_transactionAction";
import FieldSelectInput from "../../common/InputFeilds/InputSelectField";
import FieldInputTextarea from "../../common/InputFeilds/InputTextareaField";
import { useParams } from "react-router-dom";

function TransactionModal() {
  const dispatch: any = useDispatch();
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const {id} = useParams();

  const userFormValidation = Yup.object().shape({
    userId: Yup.string().required(REQUIRED),
    type: Yup.string().required(REQUIRED),
    amount: Yup.number().required(REQUIRED).min(100, 'Amount should be greater than 100'),
    description: Yup.string().max(60,'Remark should not be greter than 60').required(REQUIRED)
  });

  const formValues = {
    amount: 100,
    userId: id,
    description: "",
    type: ''
  };

  const walletFormik = useFormik({
    initialValues: formValues,
    validationSchema: userFormValidation,
    onSubmit: (values: any, { resetForm }) => {
      console.log(values)
      if(id){
        values.userId = id;
        dispatch(addMoney(values));
      }
    },
  });

  const closeModal = () => {
    dispatch(setAddMoneyModalStatus(false));
  };

  return (
    <>
      <Modal show={sharedActions.addMoneyModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={walletFormik}>
            <Form onSubmit={walletFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <Form.Group>
                    <Field
                      name="type"
                      validate={userFormValidation}
                      type="text"
                      label="Type"
                      options={['CREDIT', 'DEBIT', 'REFUND']}
                      component={FieldSelectInput}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12">
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
                <div className="col-sm-12">
                  <Form.Group>
                    <Field
                      name="description"
                      validate={userFormValidation}
                      type="textarea"
                      label="Description"
                      rows={2}
                      component={FieldInputTextarea}
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
