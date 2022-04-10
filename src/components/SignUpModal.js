import React from "react";

export default function SignUpModal() {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w100 h100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        repeat Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="tetx-danger mt-1">Validation</p>
                    </div>

                    <button className="btn btn-primary"> Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
