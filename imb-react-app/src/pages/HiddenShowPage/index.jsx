import React from "react";
import "./function.jsx"; // page main script
import "../../components/Stepper/index.jsx";

const HiddenShowPage = () => {
  const stepperConfig = [
    {
      stepperId: "multistep-container-1",
      stepperPage: [
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
      ]
    },
    {
      stepperId: "multistep-container-2",
      stepperPage: [
        {
          section: "onboarding-section2-0",
          prevButton: "",
          nextButton: "onboarding-0-button-signup2",
          stepperIndex: 0,
        },
        {
          section: "onboarding-section2-1",
          prevButton: "onboarding-1-button-back2",
          nextButton: "onboarding-1-button-next2",
          stepperIndex: 1,
        },
        {
          section: "onboarding-section2-2",
          prevButton: "onboarding-2-button-back2",
          nextButton: "onboarding-2-button-next2",
          stepperIndex: 2,
        },
        {
          section: "onboarding-section2-3",
          prevButton: "onboarding-success-button-begin2",
          nextButton: "",
          stepperIndex: 0,
        },
      ]
    }
  ];
  /* eslint-disable-next-line no-undef */ // ? function is defined globally
  HiddenShowPageFunction({ ReactProp: React, stepperConfig });

  return (
    <div className="w-layout-blockcontainer imb-container w-container">
      <div id="multistep-container-1" className="imb-multistep w-node-aaf53e66-b55c-b033-c994-da01dce61851-d6793707">
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
        </div>
        <div id="onboarding-section-0">
          <div id="w-node-_6b9b8836-3af6-4010-bb66-611502498a18-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div className="w-layout-cell">
              <div id="w-node-_6b9b8836-3af6-4010-bb66-611502498a1a-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary">Get Started</p>
                  <h1 className="imb-typography-light">Start your journey with <span className="imb-color-primary">IMB</span>.</h1>
                </div>
                <div className="w-layout-cell">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id.</p>
                </div>
                <div className="w-layout-cell">
                  <div className="w-layout-grid grid">
                    <div>
                      <div id="onboarding-0-button-login" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Login</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                    <div>
                      <div id="onboarding-0-button-signup" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Sign up now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-cell"><img loading="lazy" src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg" alt=""/></div>
          </div>
        </div>
        <div id="onboarding-section-1">
          <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c32-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c35-d6793707" className="w-layout-cell">
              <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c36-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Getting Started</p>
                  <h1 className="imb-typography-light">What's your email?</h1>
                </div>
                <div className="w-layout-cell">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6830281ad50ca3d2d6793707" data-wf-element-id="8d4f01c3-cdbb-cf6b-f671-6c5344d73c3e" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                      <div id="onboarding-input-email" className="imb-input">
                        <label htmlFor="field" className="imb-input-label">Email</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                        <div className="imb-input-error-message">* Email is required</div>
                      </div>
                      <div>
                        <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-63uh3_response" value="0.eodm4zh3L3LFgyTTJcUwtLHzLDa73oP3srFprFX9P4bkgZ9H3LAZ-ggzmGKDIZDUvrKBFMUTqMpGhcmNVn33s8LpwHD6wyBobstemUBgYgu__5zfNNON548E8qPTmsjcyfVVxyHVIdYFN7nQAjQh0O1OJPCnMN4AVRWSDVB9eVWe4VxSPYN4CcEZj44Pd6g1LWLBMKiGjIEuwdkAjVjzNT_BKmwmG2yMlUB2JnX7kgbBRfO0SojGukoeCVQMkncEF9hvWik6LB2SdglfABI0kHE1qUAqzyAJN_yfcmR8XJiqo_XTOVtD_m9XdoP34iuVq5PLF-GGeSxTZvXlvXpmh1vNE4sO0lbeEKgm7iP9kPmovrHUB5mcFZiSO86vwjgxZsrVVwI5DmjW39zaO6fLy6p0uSE3H-u-fLp8tHH1PNd-8hVGnupcCVk2cW0Je5wSwgQ1Q0QAvwK7CDUDMPksiUka1-gN9FDg4Crw6g-xoW_AqFd6Ju6aZi4vTZfVwoZuUEZJrVPPNC_OEvtZLoTbcM7NwHVQVeDX6lkpcZS6mCDEonVBMy7t1w2kZsEQ3lVipS_NbMgHQMZ3usRy1GYslJNk60vwTzUbCEuMhVpvL_4kbLgz4VNdkcNF8__bydpXWHWl3LmAmijeADXyvlTTiFDEBNYtUB9DEXGhwyLMCqaWPmQ-rT6fqtkXA21pEc7qDcCyMNx0Esx0IKZBpwHXJKGZy2UbDe0CwEytT4vLesv4xiq4LpTIU85RaUQKKsljS6e8F3m72fn6aYKQ2vxQd_N9ly6SrGq9f7NjocP_pV40Aw1I5pUBPjeGPyfNXGDnt-Qprxl57KztUNWZOX1_yA.1_4zW9FCWfbSsSzXKnrdSw.11ed5005f662c47b3eccb55aec0d2d1a53181c44571899fc0859848c7e68a7ac"/></div>
                      </div>
                    </form>
                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c49-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-1-button-back" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-1-button-next" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section-2">
          <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4335-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4338-d6793707" className="w-layout-cell">
              <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4339-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Getting Started</p>
                  <h1 className="imb-typography-light">What's your phone number?</h1>
                </div>
                <div className="w-layout-cell">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6830281ad50ca3d2d6793707" data-wf-element-id="fbec7a83-5c75-021b-4c22-a03f24af4341" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                      <div id="onboarding-input-phone" className="imb-input">
                        <label htmlFor="field" className="imb-input-label">Phone Number</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                        <div className="imb-input-error-message">* Phone number is required</div>
                      </div>
                      <div>
                        <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-nvtd1_response" value="0.m54RYfNYxH6QKquoP8P016LHfWixLU6Tajk9r8sf9RlTE29A2hNSajg2mzfxMJSp-sKGtal2RCVvxWwhI55j8FG6UtHzi7kKmGJ6AOVycPsKSZ1fh4gzYcAXhhCDu5kTTNRk4dt8unlL2shv-HCFDyCChHlBVoCUT7x2GCn8-RKrnNRWNsH3CBmNiL2sl-2sJN_7jRPmHPbMEZeLKwnFHXStzfvbxHfdrSltunk2VS_pNxFS6ftQh_ejoMBz_-JomDBfDoDGw36RmPNT5ZVscWWiVddYXIkjjXjiizkI9cwKsjwF4Q-z0JoFpEB4QOOo_1F_pkYhrQtIh77VW8OdVWwJSubypnt2BpDIH4NoSwBApB-h9UIIv7TZinFqmV5HK_Zu_WMJoGtYUwN4VXB5-YM6cZ9kPEpfFMt38TtlN5D1GSjah_GxF_oJB4A2ut5amSrg4Wgs1uj-eT0Ib8PJdknYoYYGkFhKKjtk0wDCx5SKhNYAtYYwAEboXNRLCprfQ8qT0O8aWCzvUOiYL0H5cjZwbLC7Ae_VL9yHychjreMEcDTYM5LUQs4PQ-x7ErQxDFhoyoCKwDvdIyHZMS2BZr34WEUsVC7SLNLVoFmVloBtb6RRzv6dVPgw0S_ulXZJKfssD9S2Mz-FS4nQGbUcL8k6vx4-1kqShe1LK0nDIMkidJbuj5xMAK59Fc89T1lJtFk55tBClASUxoz_WJaEGgcRPkR2QEJ9I0oJzqYh-yDEqPP52aw1-tIJwX3aFa0mULn_xUcWlzVmxpxUvNJXivVLRtT4vRiPmri4hYKhHGEkL4f3xICysvS6anH9owsvyB5k29jr4z3Stxi830NfTw.c2cIhothPWXEHTpb72JSOw.e9d3496279c4fa15115b160b493ec8bca13f684a101fa25215c6f48f76471be4"/></div>
                      </div>
                    </form>
                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af434c-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-2-button-back" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-2-button-next" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section-3">
          <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35394-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35397-d6793707" className="w-layout-cell">
              <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35398-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Personal Details</p>
                  <h1 className="imb-typography-light">Let's get to know you</h1>
                </div>
                <div className="w-layout-cell">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6830281ad50ca3d2d6793707" data-wf-element-id="0b34ad53-4740-686f-8eaf-62f447c353a0" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                      <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353a1-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                        <div className="w-layout-cell">
                          <div id="onboarding-input-firstname" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">First Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* First name is required</div>
                          </div>
                        </div>
                        <div className="w-layout-cell">
                          <div id="onboarding-input-middlename" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">Middle Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* Middle name is required</div>
                          </div>
                        </div>
                        <div className="w-layout-cell">
                          <div id="onboarding-input-lastname" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">Last Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* Last name is required</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-t2ln3_response" value="0.FcfErFg4ElZdrFe_AWSnC2lGn3Gca_mrxXm-B2NUWjypD0OqcOaV7eJd_tuiLmD6YHp5v9GUC8tjNE9ylEWoPiOnq89dcI1kD93NRiHXUkWj0v5T4tNSNd4wYkNlXFHXElYe_Kww26-4PFF5NOSJF2PgNfZby1N5vEdZHhNwP3kofjov_9m3gpkdU2H_Rg2WsHkSHBziWKo18D5GjXi6rNB3KlouET0aHgmKWfykPbcfek8kXY0Im455WR8iUKuJvdOzWwc-GbFtdHnwnAE412dxp8Jv6bqSsj6GLKOTMSHCvaIvxXxGUnPT4cnIqD3PXJzNQnEi-T6tX2anZO0lm8Kvow3NQcI6CI4fS17F2-xJteWmKZiiTAbNXDS6DqNUsXfDPK4FUK-lCGHbKzRlRXK-ms_mxJfD3wUIOQHaSJxZkvmpPC1t45fMKkXaZwFu38popLSQpz-iiOHUlslUYqHBI5wbXY4qI_oYK8RvZvJPqSCgYx6eLqzHCDf-T_sVQYMx82uhNisO9xrBFwbH27RWirzc_YAqOPMPwF4f7jVKFYn9QrcEJQDJaLDrXgJ1mhqDDI82i_2I5pQeXNd3dBB91Gt0cHfvk32T1-j8Zj3xUv5qp038KRftbZ6KZ_Agcwqr2-5Hogx4dyeHEHIMdBH-nD1s4KKju5ioW6sGz1AeH-0YhbATEtb4mxyRYtdg7eUqzu8GHehsj3GFISdwgoTYa4NqrfUzFf1LIpPWpXXysft6UPfaJXKxjCinRiDxraEG6ERzkxgm4ILEZo6n4PF7EVhDySsbcOkp52JLroVjFMcxPCAh7Mmuiz-exByTc9qvjfQ2SPAlA0hTBkJu_g.BvVgwCjIrEpMm1sl0ndWUA.d3edcaf40c98eada261f7699141c1c319e2c1fe1636c65df90a7be4905ee07bc"/></div>
                      </div>
                    </form>
                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353b5-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-3-button-back" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-3-button-next" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section-4">
          <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf6-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf7-d6793707" className="w-layout-cell">
              <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf8-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Personal Details</p>
                  <h1 className="imb-typography-light">Let's confirm your details</h1>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cff-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                    <div className="w-layout-cell">
                      <div className="imb-lv-display">
                        <h4 className="imb-lv-label">Full Name</h4>
                        <p id="onboarding-preview-name" className="imb-lv-value">John Doe</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div className="imb-lv-display">
                        <h4 className="imb-lv-label">Email</h4>
                        <p id="onboarding-preview-email" className="imb-lv-value">john@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div className="imb-lv-display">
                        <h4 className="imb-lv-label">Phone</h4>
                        <p id="onboarding-preview-phone" className="imb-lv-value">+62 1234 5678</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064d0d-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-4-button-back" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-4-button-next" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section-5">
          <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891cf-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div className="w-layout-cell">
              <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891d1-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary">Success</p>
                  <h1 className="imb-typography-light">Welcome to IMB, <span className="imb-color-primary">John</span>.</h1>
                </div>
                <div className="w-layout-cell">
                  <p>Congratulations on opening your account with us! We're thrilled to have you as a part of our community. We make banking a breeze at IMB. Feel free to reach out here if you have any questions or need assistance.</p>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891de-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-success-button-begin" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Let's Begin</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-success-button-getapp" className="imb-button imb-button-outline">
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
      <p><br/><br/><br/>------<br/><br/>Above : first stepper<br/><br/>Below : second stepper<br/><br/>------<br/><br/>‍<br/>‍</p>
      <div id="multistep-container-2" className="imb-multistep w-node-c8207f50-3431-cddd-26f6-4ae2a95f2da7-d6793707">
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
        </div>
        <div id="onboarding-section2-0">
          <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2daa-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div className="w-layout-cell">
              <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dac-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary">Get Started</p>
                  <h1 className="imb-typography-light">Start your journey with <span className="imb-color-primary">IMB</span> #2.</h1>
                </div>
                <div className="w-layout-cell">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id.</p>
                </div>
                <div className="w-layout-cell">
                  <div className="w-layout-grid grid">
                    <div>
                      <div id="onboarding-0-button-login2" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Login</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                    <div>
                      <div id="onboarding-0-button-signup2" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Sign up now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-cell"><img loading="lazy" src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg" alt=""/></div>
          </div>
        </div>
        <div id="onboarding-section2-1">
          <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dc3-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dc4-d6793707" className="w-layout-cell">
              <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dc5-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Getting Started</p>
                  <h1 className="imb-typography-light">What's your email #2 ?</h1>
                </div>
                <div className="w-layout-cell">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6830281ad50ca3d2d6793707" data-wf-element-id="c8207f50-3431-cddd-26f6-4ae2a95f2dcd" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                      <div id="onboarding-input-email" className="imb-input">
                        <label htmlFor="field" className="imb-input-label">Email</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                        <div className="imb-input-error-message">* Email is required</div>
                      </div>
                      <div>
                        <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-x15lf_response" value="0.zZfgXMzwD4iRhh2dniW__oAV7P3KW9rP-_YGRwxhK-BVZ5t2pYnONkeaPAQifeCw9mU8d7jqlUfqfQ_z7rgskT1f82MJm6ZO2Y7OPGH0ebKDvkeRuhDK9w8VlD7gprTvFmSpsNA9FI43ZMzjb_uPYno5glv5yU94E49E87YsC7CZhGisvm2F58iph8GUNozDBgGNbMMDbWtAipdWCPYpDZnDZpkQvfZJjlX7E63Uj2LXAz2LCuCuwBUtz1qJBnyS49KJXIZHXdzBTJbQVkMYnzfBAmjx2vjPhY27Edp9hhHNypjB6TtlSw0oke_1QtG4o3CtgsbbAUSB67il9sKG8BUfPp7fVIhJGHAuBNY_4HYQ_9SUP6koUaY230sgJz7DycStQycvMtqY3a-kfc7iOYu4B2s2z1qNOuKky9Xblm-v6NuJNznf82Ps0PWNXnSRPu2q2lK5DeCpUR7VWubMvDR9Y26vYiA_GE0dH9BOK9XciRRLtBPSeFaAPnaybIv_u2ybv0ndFF9C-PgsedbB8alTuGF6ZGcUV6-XL02Dg60dkShFspsmw8m0w840sNpWiBNhZ8wl8cW-F9oE3qFgAgdy5foXvplBAjhXnqxIEu6pX4iB0sZN6pJa05gVZdpdK_cG0KUD-0oAOE3xzqcOEwhvbfQhZZ8zq4qBmgoQvUTNQKRCL3yYac5E2-5FdSZYecVN-q01l-Yr-ILGykAhcZYI2U4iEme00KbSZn_lFBNAB6sJGbxzlT9f3SCM2RB8fd0sbT1d3HQ7fkt1foF2LMgRoN5QRoA3d-n6MkI80E_1gghD5chqGWYn0UclUSwRxy-o09RK8v9AFb6RlokrlQ.bxvdAj0cQA-mZKrjRbEJIQ.32395d43c2d6dfb41f71fa64e16681d9d9bd6d7cac568cebe64eecdefc39cdbd"/></div>
                      </div>
                    </form>
                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dd8-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-1-button-back2" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-1-button-next2" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section2-2">
          <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dfd-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dfe-d6793707" className="w-layout-cell">
              <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2dff-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary-2">Personal Details</p>
                  <h1 className="imb-typography-light">Let's get to know you #2</h1>
                </div>
                <div className="w-layout-cell">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6830281ad50ca3d2d6793707" data-wf-element-id="c8207f50-3431-cddd-26f6-4ae2a95f2e07" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                      <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2e08-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                        <div className="w-layout-cell">
                          <div id="onboarding-input-firstname" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">First Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* First name is required</div>
                          </div>
                        </div>
                        <div className="w-layout-cell">
                          <div id="onboarding-input-middlename" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">Middle Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* Middle name is required</div>
                          </div>
                        </div>
                        <div className="w-layout-cell">
                          <div id="onboarding-input-lastname" className="imb-input">
                            <label htmlFor="field" className="imb-input-label">Last Name</label><input className="imb-input-field w-input" maxLength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="email"/>
                            <div className="imb-input-error-message">* Last name is required</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-1ax2e_response" value="0.qNk6Ayysx6rbkwUEXmbaowJ_-S9GQNd9zn0tSkcutgRiczt6CXrdgkaCGssV6fwvU6DFgSzorXbH-KFpGs1e_FHvkvXEsZD8ohi1Q307sgSavz8J0xltkQ4FYZs0aIekJEPGTZpB8x2tywr3sgeyjmijNXXcImqCUUNbSn9P96x78b2TMZV4e7AXzM9rDZ5siCJfZIXIsnN9TO_bih54PM1LucDoj1jErFtEMVbkxOuXDgOBoIk4veib7EKSQb-j2_J-3jSn9GbMSfiO4PLjg1fY4ZxqCunDb1gvjuD9XeBexG79SPpsN8SLKcMjRDJI_xw1MikSoJxE3d7BsN9FD9-aA5tPV7LkoxWK2dZzavDwUjty7Kvh_k7-VN1YVNVWx9HSg2GJtHXsDm7e1K8RhKKWebfJ3hTM_pOuG6NrT_gBJ-bLxh3NsGMELfGY5VlDh2fGCi1MsyS0YbKsdAxcTYTkLmI_o7xVjIa2N3ZWG8ygVzuZIig56i0gwqXATdB35Weo0vgCmLw_eqZyJtoyB9YwUbXTstGiZFo6hmhKluSXuJi8A1eoGzsYgXdCymT3Rdf7zJITjqgQ5L0k_NPA1kAirV9SdvgaoWFY2pECn09AUBv5gaGELztpNL0Z-q9VDnbIm_JGsLWQU-EPhWYEr5lF3UYxPjdPdKtVRLzVHhKEO-RmhVnnpLiBqnKrVv7sIZ6RgGZTxD8Ofwy8MuqJ4dyXOQkyrtS3kJWVmYZ4J5KWjUnXMqAfaf7GfJSgXkIuN-YUKyv4c204TG47ZDi-IJi3F2ECZkMZJdpAH7liAuzWoCsfchf76TDfipCSO534V0ViFbCvjVIXz5PieImCEg.wi5VXorW4urS0aejeEJ0wQ.549ca52d6c411f312e3b4390df6dc55b4ed551eefcf4b70adf784c23f8ce67fb"/></div>
                      </div>
                    </form>
                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2e1c-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-2-button-back2" className="imb-button imb-button-outline">
                        <p className="imb-button-text">Back</p>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-2-button-next2" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Next</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="onboarding-section2-3">
          <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2e43-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
            <div className="w-layout-cell">
              <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2e45-d6793707" className="w-layout-layout imb-stack wf-layout-layout">
                <div className="w-layout-cell">
                  <p className="imb-color-primary">Success</p>
                  <h1 className="imb-typography-light">Welcome to IMB, <span className="imb-color-primary">John</span> #2.</h1>
                </div>
                <div className="w-layout-cell">
                  <p>Congratulations on opening your account with us! We're thrilled to have you as a part of our community. We make banking a breeze at IMB. Feel free to reach out here if you have any questions or need assistance.</p>
                </div>
                <div className="w-layout-cell">
                  <div id="w-node-c8207f50-3431-cddd-26f6-4ae2a95f2e52-d6793707" className="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                    <div className="w-layout-cell">
                      <div id="onboarding-success-button-begin2" className="imb-button imb-button-with-icon">
                        <p className="imb-button-text">Let's Begin</p>
                        <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" className="imb-button-icon"/>
                      </div>
                    </div>
                    <div className="w-layout-cell">
                      <div id="onboarding-success-button-getapp2" className="imb-button imb-button-outline">
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
  );
};

window.HiddenShowPage = HiddenShowPage;

export default HiddenShowPage;
