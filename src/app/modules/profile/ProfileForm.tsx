import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import { getUserProfile, updateProfile } from "./core/_requests";
import { toast } from "react-toastify";
import { useAuth } from "../auth";

const profileSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required"),
  last_name: Yup.string()
    .required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required"),
  username: Yup.string().required("Username is required"),
  phone: Yup.string()
    .min(10, "Minimum 10 numbers")
    .max(12, "Maximum 12 numbers")
    .required("Phone is required"),
  // address: Yup.string().required("Address is required"),
});

const ProfileForm = () => {

  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserProfile().then((user) => {
      if (user.status === 200) {
        formik.setValues({
          first_name: user.data.data?.first_name,
          last_name: user.data.data?.last_name,
          email: user.data.data?.email,
          phone: user.data.data?.phone,
          // address: user.data.data?.country,
          username: user.data.data?.username,
        });
      }
    });
  }, [loading]);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone: "",
    // address: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: profileSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      setSubmitting(true);
      try {
        const { data: auth } = await updateProfile(values);
        toast.success(`${auth["message"]}`);
        setLoading(false);
        resetForm();
      } catch (ex: any) {
        toast.error(ex.response.data.error);
        if (ex.response.status ===401) {
          setTimeout(() => {
            logout();
          }, 2000);
        }
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form
        id="kt_modal_add_user_form"
        className="form"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div
          className="d-flex flex-column px-7 p-md-5 outer-wrapper"
          id="kt_modal_add_user_scroll"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_modal_add_user_header"
          data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
          data-kt-scroll-offset="300px"
        >
          <div className="fv-row mb-7">
            <img src="" alt="" />
            <label className="required fw-bold fs-6 mb-2">First Name</label>
            <div className="new_pass_div">
              <input
                placeholder="First Name"
                {...formik.getFieldProps("first_name")}
                type="text"
                name="first_name"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid":
                      formik.touched.first_name && formik.errors.first_name,
                  },
                  {
                    "is-valid":
                      formik.touched.first_name && !formik.errors.first_name,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.first_name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">Last Name</label>
            <div className="new_pass_div">
              <input
                placeholder="Last Name"
                {...formik.getFieldProps("last_name")}
                type="text"
                name="last_name"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid":
                      formik.touched.last_name && formik.errors.last_name,
                  },
                  {
                    "is-valid":
                      formik.touched.last_name && !formik.errors.last_name,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.last_name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">Email</label>
            <div className="new_pass_div">
              <input
                readOnly
                placeholder="Email"
                {...formik.getFieldProps("email")}
                type="email"
                name="email"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid": formik.touched.email && formik.errors.email,
                  },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">UserName</label>
            <div className="new_pass_div">
              <input
                readOnly
                placeholder="Username"
                {...formik.getFieldProps("username")}
                type="text"
                name="username"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid":
                      formik.touched.username && formik.errors.username,
                  },
                  {
                    "is-valid":
                      formik.touched.username && !formik.errors.username,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.username}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">Phone</label>
            <div className="new_pass_div">
              <input
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
                type="text"
                name="phone"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid": formik.touched.phone && formik.errors.phone,
                  },
                  {
                    "is-valid": formik.touched.phone && !formik.errors.phone,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.phone}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">Address</label>
            <div className="new_pass_div">
              <input
                placeholder="Address"
                {...formik.getFieldProps("address")}
                type="text"
                name="address"
                className={clsx(
                  "form-control form-control-solid mb-3 mb-lg-0",
                  {
                    "is-invalid":
                      formik.touched.address && formik.errors.address,
                  },
                  {
                    "is-valid":
                      formik.touched.address && !formik.errors.address,
                  }
                )}
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.address}</span>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
        <div className="text-center pb-5">
          <button
            type="submit"
            id="kt_sign_in_submit"
            className="btn btn-primary"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <span className="indicator-label">Update Profile</span>}
            {loading && (
              <span className="indicator-progress" style={{ display: "block" }}>
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export { ProfileForm };
