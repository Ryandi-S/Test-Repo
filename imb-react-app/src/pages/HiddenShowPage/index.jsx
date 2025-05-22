import React from "react";
import "./moduleFunction.jsx"; // page module
import "./function.jsx"; // page main script
import "../../components/Stepper/index.jsx";

const HiddenShowPage = () => {
  /* eslint-disable-next-line no-undef */ // ? function is defined globally
  HiddenShowPageFunction(React);

  return (
    <div className="w-layout-blockcontainer imb-container w-container">
      <div
        id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6525-958faacb"
        className="w-layout-layout imb-stack wf-layout-layout"
      >
        <div
          id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6526-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-0">
            <div
              id="w-node-ca87aaa3-3157-c565-3cbc-09710191a74e-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div className="w-layout-cell">
                <div
                  id="w-node-_9a24a930-6657-c21a-8d60-a63b8bd65c47-958faacb"
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
                    <div
                      id="w-node-be86ce02-387b-cb2f-0d05-beb76192a368-958faacb"
                      className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div className="w-layout-cell">
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
                      <div className="w-layout-cell">
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
                  src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-c9433695-ac55-b826-c273-0b458e3ae835-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-1">
            <div
              id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c32-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c33-958faacb"
                className="w-layout-cell"
              >
                <div className="imb-stepper">
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c35-958faacb"
                className="w-layout-cell"
              >
                <div
                  id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c36-958faacb"
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
                        data-wf-page-id="681c34e75e7ea102958faacb"
                        data-wf-element-id="8d4f01c3-cdbb-cf6b-f671-6c5344d73c3e"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                        aria-label="Email Form"
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
                          />
                          <div className="imb-input-error-message">
                            * Email is required
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="hidden"
                              name="cf-turnstile-response"
                              id="cf-chl-widget-ismnu_response"
                              value="0.Qlc5pJ6AkpfxBuvmldOl5wHPK7RbGEV9sWPg9AZ6lcLPSTIi9q2RZsfgnjq1340yFGVM5FdOdajkuG1wFlZlXuK2dYcyStQTIyIvpOGIuVw3secOKaePQggVCAj4ByDtEuzxLVWsHjGYbDSO5UDYN8P0Rb_JZ7e-CuABg-Pb4QJwQYwqVS69_4fjd4SVutcT3M_RcsbAMxy32lLErfxUTrsCKIBJEl8n3DvWhASY110pCbAwykgj_vH_o4bKfvmOYCE08G4c92fc_0-22okn9I3pcfDqGg3wFkXkyJ5CL7MvIrTQrAzQ8DZqIjrr5JOdQeB-LXlworpm8X0XYMwBmjVaszE4MLJeat58lAWZ27CZOxmg-i6uhvHhOTloadTdIrho7moB9qJxzBbxsoCEee1P9kXuzAePajSz1NWdl1zhl8pAybXQ4iH3Clgks75FVsxoELCFWgODBifnEy2j0uQX5_LA0ZaoNeY5nh5sfJvq3t1rMtokvD6yAe1CARGnWCubOl-MVwpGsxrK6Xy_qVZEiFtQRKDFW-Mme5a6SXvqDzllYtTfd7SUx1DI9nzcW9V5xpzyvQ7NuRMlHrx5cpIbnWacP57o2RjZfAcS1Vw3KjlyBhDql2n15UOISwd1MaUfwstVXEGQnrcK-OXZFIqgEV8IWAHXdPpj31XTbTdP0jS7574Zxj3a5E18zpbHzIDhRHTouU2HL-Sb-vdxWg3U2alCMauLUF6SNeGQK3yXBpzZUEuYvg3aaLp5W-f7atE0-zNQ5kxxC4IEOCuspGIHFy4GUZGyACzXMaIT4EmAH2FxhoEI1psu7bU1keTjXdGA8QJQQnHR65wXhLAGAQ.SPFddtUW3tHjxS2izV2Lzg.f9d42e39234c5454274cbba7eab4be2745d7a0a5769ebc4c7bead9f22727376e"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        className="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        className="w-form-fail"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form failure"
                      >
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c49-958faacb"
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
          id="w-node-adf6161a-df29-7cf5-77ec-7c4c530042eb-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-2">
            <div
              id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4335-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4336-958faacb"
                className="w-layout-cell"
              >
                <div className="imb-stepper">
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4338-958faacb"
                className="w-layout-cell"
              >
                <div
                  id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4339-958faacb"
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
                        data-wf-page-id="681c34e75e7ea102958faacb"
                        data-wf-element-id="fbec7a83-5c75-021b-4c22-a03f24af4341"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                        aria-label="Email Form"
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
                          />
                          <div className="imb-input-error-message">
                            * Phone number is required
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="hidden"
                              name="cf-turnstile-response"
                              id="cf-chl-widget-pns36_response"
                              value="0.jvOITY5IuU2jF6vVjY6PZfuUTgIAwEPs7ZzN_WVWpLQKBzewyzJZUfQ-HdAAcQlLreVAxC3mRqcw6aBLjb4fUgFP1bP8TOcOj5Naz7hyeZe0cgsZS_blZXUN6jdh98TXD9el_h6v7ohEuhreCQ0g6b5xa_911L-QUbCAT7qD5srxzL8T7hTeQkfVCjDER9zG_B04P242ZhHLyMF7u_L8aby6c2XoCbA47W0W3-6ynlLCHsNo1T0h9In8qi6Fimihg6MkOi5UflicVp0Mkfj49XuecOhVEDIEYc4mW3hCUROqexlQagEfQCPGXHHhlV3QzA4vQ3huINddp5dsWZC9OkEIIcgDdukw0aD9pMDFaX0H3B5s7tvCCOVbfBPDtYc2WlGGu7Q7HiXO72fhKilQcxMk9peieJX8Vo_jFa1r0L0dLES75y40H5774Zyyz5qjEVjct1cpzLCc1G5DJDO2KJIHzL0V9V7meAtwejgyEgTQkoSPMN8_LeF8B_CULH1cdwlw4pWYXGURU_RR6ekT1S3zQoK9BkwKFT9iteHpbnJQNfTHU1XJyA333WWmIxDmuU2aioF9k84hnVXHl7IxGnetLw-iD9dZFsLt6056np-U9RYgHXmIJM7X-qjuuiw4D-BanP2n4aqNenNOK1ZNcHqJhUeIyo4sgUJ-9sD1XESA6LwCOzEs6nE3dneWFslWylL1yeMXswiHrrAzgxfJuHJUg7GajIvyM_7nJfp4rY2uPtst0qiCbhgt3d2xlTFxMZc8Y6VCSVJCr4JSjYyim0EWALy-NwAj4xeqi1gjMHMQQz0E-iOH5BmsRsqIDxVJLFMtH2fh8mTh8p99H0hwxw.2AcODU2NB_ytNV9uoXa-TQ.c45d68102c930fe0ff8645708b4e9fe79bc208c60fb38e717b589bad0bf3039f"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        className="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        className="w-form-fail"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form failure"
                      >
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-fbec7a83-5c75-021b-4c22-a03f24af434c-958faacb"
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
          id="w-node-c7724385-fa1e-984f-ae37-eafa54f7830c-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-3">
            <div
              id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35394-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35395-958faacb"
                className="w-layout-cell"
              >
                <div className="imb-stepper">
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                  <div className="imb-stepper-step">
                    <div className="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35397-958faacb"
                className="w-layout-cell"
              >
                <div
                  id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35398-958faacb"
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
                        data-wf-page-id="681c34e75e7ea102958faacb"
                        data-wf-element-id="0b34ad53-4740-686f-8eaf-62f447c353a0"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                        aria-label="Email Form"
                      >
                        <div
                          id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353a1-958faacb"
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
                              />
                              <div className="imb-input-error-message">
                                * Last name is required
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="hidden"
                              name="cf-turnstile-response"
                              id="cf-chl-widget-6h00u_response"
                              value="0.3nOTGpn2dL5RQTTybg7MnfC13yLscQO0nQzrPTk6lTwVFPowV4dEK8VBvRgEU9_vUwwQnLtPsh-xNip7SrUVaHgcvJbNv8AQRcJHaeUzNlV9IeEqJn1r_dC2VgiKafO0wo4YOB8LPyqa7JUFb9LeP6eZTkban2LhtD-ozYP7IGGQlrqZ9lOEL6h_5A5hFrCqvzTSxra2A9tt4DkLfbLxsi_CFx46ozrLbtAdomLcL8Y9vUrUA_JDTDwswN4vvJcSURsdycFHbeVbacJYgOm5ZGzyeBKhYlAj5DLsPnmwhdqqZnApcMMF5AKDS9HwzCBSuDrpPDeL2sbXBdjG0FO3Qcy_fRrtUgegDMIzuZQe3HlOGgjiJQXwSQmbQG3lzfZlVbhRC1LCLo1_O1R4dsI-JwnQ_Rwq-JrYNBb0WUgQX8MFXUw9J-WdX8LoJaM5ssHD_db7hSfdQ4gtXbmuHu-L0AAJxJT4GesN77hp9NaUh5pDHU7hjtrAxQeptJPo5eKYaLiEgCA9anOQkAAv3Lwz-2-Jz61D3iCcthBctF0-qIZa7sLYExBS0yEPTdW-9eYeJ3CHiQ0HOmOwJ8ApJDf1qgwqWAb4fRBGBBPb2FI-kUCXEfxm94V0jD2gfNjfY54Be3zb13YcCbHwAuyHoHhWxudjjooK9SMFQ7HJ103We9HumVJSr-mMycCC4Fr1YnDyHn8OJoM86UNV3RrsFzqVaNOp_ul0pvrK9k1N3s7rru7bXBMVtcEJmEKd1LVfBhxebehsH8-qUhWBDOso2_Gg2Nt0rxrXQMG8bVrVuUPrulSPrWqQ12bSqQNJ2HBghJi5lwzHKCWeuZLXftEEaYz1sw.x604pXTpZq2aGevUSpKsuA.6a76a0d4e6772109eaefd5611ae65ea7feeada38bdeeb28408c6f399900839ef"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        className="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        className="w-form-fail"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form failure"
                      >
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-cell">
                    <div
                      id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353b5-958faacb"
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
          id="w-node-c32a3559-6741-dcef-b060-169b2e288f60-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-4">
            <div
              id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf6-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf7-958faacb"
                className="w-layout-cell"
              >
                <div
                  id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf8-958faacb"
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
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cff-958faacb"
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
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064d0d-958faacb"
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
          id="w-node-_9649efbb-1b11-345b-266a-3b1879770036-958faacb"
          className="w-layout-cell"
        >
          <div id="onboarding-section-5">
            <div
              id="w-node-d063f4b7-329a-6f2d-0599-872182b891cf-958faacb"
              className="w-layout-layout imb-stack wf-layout-layout"
            >
              <div className="w-layout-cell">
                <div
                  id="w-node-d063f4b7-329a-6f2d-0599-872182b891d1-958faacb"
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
                      id="w-node-d063f4b7-329a-6f2d-0599-872182b891de-958faacb"
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
