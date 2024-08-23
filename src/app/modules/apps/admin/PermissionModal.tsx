import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormDetails,
  setPermissionModalStatus,
} from "../../../../redux/features/shared/sharedSlice";
import { FormikProvider, useFormik } from "formik";
import { Form } from "react-bootstrap";
import {
  updateUserPermission,
} from "../../../../redux/features/user/_userAction";

function AdminPermissionModal() {
  const dispatch: any = useDispatch();
  const sharedActions: any = useSelector((state: any) => state.sharedActions);
  const permissions= sharedActions.formDetails?.permissions;
  const formValues = {
    createUser: permissions?.createUser || false,
    readUser: permissions?.readUser|| true,
    updateUser: permissions?.updateUser|| false,
    deleteUser: permissions?.deleteUser|| false,

    createBanner: permissions?.createBanner || false,
    readBanner: permissions?.readBanner || true,
    updateBanner: permissions?.updateBanner || false,
    deleteBanner: permissions?.deleteBanner|| false,

    createOrder: permissions?.createOrder || false,
    readOrder: permissions?.readOrder || true,
    updateOrder: permissions?.updateOrder || false,
    deleteOrder: permissions?.deleteOrder ||  false,

    // createVehicle: false,
    // readVehicle: true,
    // updateVehicle: false,
    // deleteVehicle: false,

    // createChallan: false,
    // readChallan: true,
    // updateChallan: false,
    // deleteChallan: false,
  };

  const userFormik = useFormik({
    initialValues: formValues,
    onSubmit: (values: any) => {
        dispatch(
          updateUserPermission({
            ...values,
            _id: sharedActions.formDetails._id
          })
        );
    },
  });

  const closeModal = () => {
    dispatch(setPermissionModalStatus(false));
    dispatch(setFormDetails({}));
  };

  return (
    <>
      <Modal
        show={sharedActions.permissionModal}
        onHide={closeModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikProvider value={userFormik}>
            <Form onSubmit={userFormik.handleSubmit}>
              <div className="row">
                <div className="col-sm-12 col-md-6 mb-6">
                  <Form.Label>Users</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="createUser"
                      type={"checkbox"}
                      id={`create-user`}
                      onChange={(e)=>userFormik.setFieldValue('createUser',e.target.checked)}
                      checked={userFormik.values.createUser}
                      label={`Create User `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="readUser"
                      type={"checkbox"}
                      id={`read-user`}
                      onChange={(e)=>userFormik.setFieldValue('readUser',e.target.checked)}
                      checked={userFormik.values.readUser}
                      label={`Read User `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="updateUser"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('updateUser',e.target.checked)}
                      checked={userFormik.values.updateUser}
                      id={`update-user`}
                      label={`Update User `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="deleteUser"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('deleteUser',e.target.checked)}
                      checked={userFormik.values.deleteUser}
                      id={`delete-user`}
                      label={`Delete User `}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 mb-6">
                  <Form.Label>Banners</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="createBanner"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('createBanner',e.target.checked)}
                      checked={userFormik.values.createBanner}
                      id={`create-banner`}
                      label={`Create Banner `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="readBanner"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('readBanner',e.target.checked)}
                      checked={userFormik.values.readBanner}
                      id={`read-banner`}
                      label={`Read Banner `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="updateBanner"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('updateBanner',e.target.checked)}
                      checked={userFormik.values.updateBanner}
                      id={`update-banner`}
                      label={`Update Banner `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="deleteBanner"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('deleteBanner',e.target.checked)}
                      checked={userFormik.values.deleteBanner}
                      id={`delete-banner`}
                      label={`Delete Banner `}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 mb-6">
                  <Form.Label>Orders</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="createOrder"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('createOrder',e.target.checked)}
                      checked={userFormik.values.createOrder}
                      id={`create-order`}
                      label={`Create Order `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="readOrder"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('readOrder',e.target.checked)}
                      checked={userFormik.values.readOrder}
                      id={`read-order`}
                      label={`Read Order `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="updateOrder"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('updateOrder',e.target.checked)}
                      checked={userFormik.values.updateOrder}
                      id={`update-order`}
                      label={`Update Order `}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="deleteOrder"
                      type={"checkbox"}
                      onChange={(e)=>userFormik.setFieldValue('deleteOrder',e.target.checked)}
                      checked={userFormik.values.deleteOrder}
                      id={`delete-order`}
                      label={`Delete Order `}
                    />
                  </Form.Group>
                </div>
              </div>
              <Button type="submit" className="primaryBtn w-100 active">
                Update Permission
              </Button>
            </Form>
          </FormikProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { AdminPermissionModal };
