import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import { login } from "../core/_requests";
import { useAuth } from "../core/Auth";
import "./style.scss";
import { notify } from "../../../../utils/shared";
import { setupAxios } from "../core/AuthHelpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../../../redux/features/shared/sharedSlice";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "admin@admin.com",
  password: "Qwarty@123",
};

export function Login() {
  const dispatch:any = useDispatch();
  const [loading, setLoading] = useState(false);
  const [newPassType, setNewPassType] = useState(true);
  const { saveAuth, setCurrentUser} = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth?.data);
        setCurrentUser(auth["data"]);
        dispatch(setLoginUser(auth?.data))
        setupAxios(axios);
        notify(auth.responseMessage, 'success');
      } catch (error: any) {
        console.log(error)
        saveAuth(undefined);
        setSubmitting(false);
        setLoading(false);
        notify(error?.response?.data?.responseMessage, 'error');
      }
    },
  });

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      <div className="fv-row mb-5 text-center">
        <img className="w-50 h-50" src="media/logos/logo-svg.svg" alt="media/" />
      </div>
      {/* begin::Form group */}
      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
        <input
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )}
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-dark fs-6 mb-0">
          Password
        </label>
        <div className="position-relative">
        <input
          placeholder="Password"
          type={newPassType ? "password" : "text"}
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control bg-transparent",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
          name="password"
        />
        <i
          className={
            newPassType
              ? "bi bi-eye-slash-fill eyeIcon"
              : "bi bi-eye-fill eyeIcon"
          }
          onClick={() => {
            setNewPassType(!newPassType);
          }}
        ></i>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />
      </div>
      <div className="d-grid mb-10">
        <button
          type="submit"
          id="kt_sign_in_submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Continue</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
