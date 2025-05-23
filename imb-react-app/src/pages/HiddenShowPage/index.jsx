import React from "react";
import "./function.jsx"; // page main script
import "../../components/Stepper/index.jsx";

const HiddenShowPage = () => {
  const stepperConfig = [
    {
      section: "onboarding-section-0",
      prevButton: "",
      nextButton: "onboarding-0-button-signup",
      stepperIndex: 0,
    },
    {
      section: "onboarding-section-1",
      prevButton: "onboarding-1-button-back",
      nextButton: "onboarding-1-button-next",
      stepperIndex: 1,
    },
    {
      section: "onboarding-section-2",
      prevButton: "onboarding-2-button-back",
      nextButton: "onboarding-2-button-next",
      stepperIndex: 2,
    },
    {
      section: "onboarding-section-3",
      prevButton: "onboarding-3-button-back",
      nextButton: "onboarding-3-button-next",
      stepperIndex: 3,
    },
    {
      section: "onboarding-section-4",
      prevButton: "onboarding-4-button-back",
      nextButton: "onboarding-4-button-next",
      stepperIndex: 4,
    },
    {
      section: "onboarding-section-5",
      prevButton: "onboarding-success-button-begin",
      nextButton: "",
      stepperIndex: 0,
    },
  ];
  /* eslint-disable-next-line no-undef */ // ? function is defined globally
  HiddenShowPageFunction({ ReactProp: React, stepperConfig });

  return (
    <div className="w-layout-blockcontainer imb-container w-container">
      <div
        id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6525-d6793707"
        className="w-layout-layout imb-stack wf-layout-layout"
      >
        <div
          id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6526-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-0">
            <div
              id="w-node-_6b9b8836-3af6-4010-bb66-611502498a18-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div className="w-layout-cell">
                <div
                  id="w-node-_6b9b8836-3af6-4010-bb66-611502498a1a-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary">Get Started</p>
                    <h1 className="imb-typography-light">
                      Start your journey with{" "}
                      <span className="imb-color-primary">IMB</span>.
                    </h1>
                  </div>
                  <div className="w-layout-cell">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id.
                    </p>
                  </div>
                  <div className="w-layout-cell">
                    <div className="w-layout-grid grid">
                      <div>
                        <div
                          id="onboarding-0-button-login"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Login</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          id="onboarding-0-button-signup"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Sign up now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-cell">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_81e3a992-e81f-50e9-c65d-8297801a9c1a-d6793707"
          className="w-layout-cell"
        >
          <div className="imb-stepper">
            <div className="imb-stepper-step">
              {/* imb-stepper-step-active */}
              <div className="imb-stepper-step-block"></div>
            </div>
            {/* <div className="imb-stepper-step">
              <div className="imb-stepper-step-block"></div>
            </div>
            <div className="imb-stepper-step">
              <div className="imb-stepper-step-block"></div>
            </div> */}
          </div>
        </div>
        <div
          id="w-node-c9433695-ac55-b826-c273-0b458e3ae835-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-1">
            <div
              id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c32-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c35-d6793707"
                className="w-layout-cell"
              >
                <div
                  id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c36-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary-2">Getting Started</p>
                    <h1 className="imb-typography-light">What's your email?</h1>
                  </div>
                  <div className="w-layout-cell">
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        data-wf-page-id="6830281ad50ca3d2d6793707"
                        data-wf-element-id="8d4f01c3-cdbb-cf6b-f671-6c5344d73c3e"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                      >
                        <div id="onboarding-input-email" className="imb-input">
                          <label for="field" className="imb-input-label">
                            Email
                          </label>
                          <input
                            className="imb-input-field w-input"
                            maxlength="256"
                            name="field"
                            data-name=""
                            placeholder="Type something"
                            type="text"
                            id="field"
                            data-type="abc"
                          />
                          <div className="imb-input-error-message">
                            * Email is required
                          </div>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c49-d6793707"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-1-button-back"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-1-button-next"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-adf6161a-df29-7cf5-77ec-7c4c530042eb-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-2">
            <div
              id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4335-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4338-d6793707"
                className="w-layout-cell"
              >
                <div
                  id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4339-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary-2">Getting Started</p>
                    <h1 className="imb-typography-light">
                      What's your phone number?
                    </h1>
                  </div>
                  <div className="w-layout-cell">
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        data-wf-page-id="6830281ad50ca3d2d6793707"
                        data-wf-element-id="fbec7a83-5c75-021b-4c22-a03f24af4341"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                      >
                        <div id="onboarding-input-phone" className="imb-input">
                          <label for="field" className="imb-input-label">
                            Phone Number
                          </label>
                          <input
                            className="imb-input-field w-input"
                            maxlength="256"
                            name="field"
                            data-name=""
                            placeholder="Type something"
                            type="text"
                            id="field"
                            data-type="abc"
                          />
                          <div className="imb-input-error-message">
                            * Phone number is required
                          </div>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-fbec7a83-5c75-021b-4c22-a03f24af434c-d6793707"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-2-button-back"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-2-button-next"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-c7724385-fa1e-984f-ae37-eafa54f7830c-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-3">
            <div
              id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35394-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35397-d6793707"
                className="w-layout-cell"
              >
                <div
                  id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35398-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary-2">Personal Details</p>
                    <h1 className="imb-typography-light">
                      Let's get to know you
                    </h1>
                  </div>
                  <div className="w-layout-cell">
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        data-wf-page-id="6830281ad50ca3d2d6793707"
                        data-wf-element-id="0b34ad53-4740-686f-8eaf-62f447c353a0"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                      >
                        <div
                          id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353a1-d6793707"
                          className="w-layout-layout imb-stack wf-layout-layout"
                        >
                          <div className="w-layout-cell">
                            <div
                              id="onboarding-input-firstname"
                              className="imb-input"
                            >
                              <label for="field" className="imb-input-label">
                                First Name
                              </label>
                              <input
                                className="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                                data-type="abc"
                              />
                              <div className="imb-input-error-message">
                                * First name is required
                              </div>
                            </div>
                          </div>
                          <div className="w-layout-cell">
                            <div
                              id="onboarding-input-middlename"
                              className="imb-input"
                            >
                              <label for="field" className="imb-input-label">
                                Middle Name
                              </label>
                              <input
                                className="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                                data-type="abc"
                              />
                              <div className="imb-input-error-message">
                                * Middle name is required
                              </div>
                            </div>
                          </div>
                          <div className="w-layout-cell">
                            <div
                              id="onboarding-input-lastname"
                              className="imb-input"
                            >
                              <label for="field" className="imb-input-label">
                                Last Name
                              </label>
                              <input
                                className="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                                data-type="abc"
                              />
                              <div className="imb-input-error-message">
                                * Last name is required
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353b5-d6793707"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-3-button-back"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-3-button-next"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-c32a3559-6741-dcef-b060-169b2e288f60-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-4">
            <div
              id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf6-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf7-d6793707"
                className="w-layout-cell"
              >
                <div
                  id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf8-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary-2">Personal Details</p>
                    <h1 className="imb-typography-light">
                      Let's confirm your details
                    </h1>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cff-d6793707"
                      className="w-layout-layout imb-stack wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div className="imb-lv-display">
                          <h4 className="imb-lv-label">Full Name</h4>
                          <p
                            id="onboarding-preview-name"
                            className="imb-lv-value"
                          >
                            John Doe
                          </p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div className="imb-lv-display">
                          <h4 className="imb-lv-label">Email</h4>
                          <p
                            id="onboarding-preview-email"
                            className="imb-lv-value"
                          >
                            john@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div className="imb-lv-display">
                          <h4 className="imb-lv-label">Phone</h4>
                          <p
                            id="onboarding-preview-phone"
                            className="imb-lv-value"
                          >
                            +62 1234 5678
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064d0d-d6793707"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-4-button-back"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-4-button-next"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_9649efbb-1b11-345b-266a-3b1879770036-d6793707"
          className="w-layout-cell"
        >
          <div id="onboarding-section-5">
            <div
              id="w-node-d063f4b7-329a-6f2d-0599-872182b891cf-d6793707"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div className="w-layout-cell">
                <div
                  id="w-node-d063f4b7-329a-6f2d-0599-872182b891d1-d6793707"
                  className="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <p className="imb-color-primary">Success</p>
                    <h1 className="imb-typography-light">
                      Welcome to IMB,{" "}
                      <span className="imb-color-primary">John</span>.
                    </h1>
                  </div>
                  <div className="w-layout-cell">
                    <p>
                      Congratulations on opening your account with us! We're
                      thrilled to have you as a part of our community. We make
                      banking a breeze at IMB. Feel free to reach out here if
                      you have any questions or need assistance.
                    </p>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-d063f4b7-329a-6f2d-0599-872182b891de-d6793707"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-success-button-begin"
                          className="imb-button imb-button-with-icon"
                        >
                          <p className="imb-button-text">Let's Begin</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            className="imb-button-icon"
                          />
                        </div>
                      </div>
                      <div className="w-layout-cell">
                        <div
                          id="onboarding-success-button-getapp"
                          className="imb-button imb-button-outline"
                        >
                          <p className="imb-button-text">Get the App</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-cell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.HiddenShowPage = HiddenShowPage;

export default HiddenShowPage;
