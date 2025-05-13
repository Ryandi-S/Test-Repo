import React from "react";

function HiddenShowPage() {
  // const getToEmailPage = () => {
  //   const starterPage = document.querySelector("#onboarding-section-0");
  //   const emailPage = document.querySelector("#onboarding-section-1");
  //   starterPage.classList.remove("imb-display-block");
  //   starterPage.classList.add("imb-display-none");
  //   emailPage.classList.remove("imb-display-block");
  // };
  function getToEmailPage() {
    const starterPage = document.querySelector("#onboarding-section-0");
    const emailPage = document.querySelector("#onboarding-section-1");
    console.log("starterPage", starterPage);
    starterPage.classList.add("imb-display-none");
    emailPage.classList.remove("imb-display-none");
  }

  function getToPhonePage() {
    const emailPage = document.querySelector("#onboarding-section-1");
    const phonePage = document.querySelector("#onboarding-section-2");
    emailPage.classList.remove("imb-display-block");
    emailPage.classList.add("imb-display-none");
    phonePage.classList.remove("imb-display-none");
  }

  function getToPersonalDetailsPage() {
    const phonePage = document.querySelector("#onboarding-section-2");
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    phonePage.classList.remove("imb-display-block");
    phonePage.classList.add("imb-display-none");
    personalDetailsPage.classList.remove("imb-display-none");
  }

  function getToSuccessPage() {
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    const successPage = document.querySelector("#onboarding-section-4");
    personalDetailsPage.classList.remove("imb-display-block");
    personalDetailsPage.classList.add("imb-display-none");
    successPage.classList.remove("imb-display-none");
  }

  function getToStarterPage() {
    const successPage = document.querySelector("#onboarding-section-4");
    const starterPage = document.querySelector("#onboarding-section-0");
    successPage.classList.remove("imb-display-block");
    starterPage.classList.remove("imb-display-none");
    starterPage.classList.add("imb-display-block");
  }

  return (
    <div class="w-layout-blockcontainer imb-container w-container">
      <div
        id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6525-958faacb"
        class="w-layout-layout imb-stack wf-layout-layout"
      >
        <div
          id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6526-958faacb"
          class="w-layout-cell"
        >
          <div id="onboarding-section-0">
            <div
              id="w-node-ca87aaa3-3157-c565-3cbc-09710191a74e-958faacb"
              class="w-layout-layout imb-stack wf-layout-layout"
            >
              <div class="w-layout-cell">
                <div
                  id="w-node-_9a24a930-6657-c21a-8d60-a63b8bd65c47-958faacb"
                  class="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div class="w-layout-cell">
                    <p class="imb-color-primary">Get Started</p>
                    <h1 class="imb-typography-light">
                      Start your journey with{" "}
                      <span class="imb-color-primary">IMB</span>.
                    </h1>
                  </div>
                  <div class="w-layout-cell">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id.
                    </p>
                  </div>
                  <div class="w-layout-cell">
                    <div
                      id="w-node-be86ce02-387b-cb2f-0d05-beb76192a368-958faacb"
                      class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-0-button-login"
                          class="imb-button imb-button-with-icon"
                        >
                          <p class="imb-button-text">Login</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            class="imb-button-icon"
                          />
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-0-button-signup"
                          class="imb-button imb-button-outline"
                        >
                          <button
                            class="imb-button-text"
                            onClick={getToEmailPage}
                          >
                            Sign up now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-layout-cell">
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
          class="w-layout-cell"
        >
          <div id="onboarding-section-1" class="imb-display-none">
            <div
              id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c32-958faacb"
              class="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c33-958faacb"
                class="w-layout-cell"
              >
                <div class="imb-stepper">
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c35-958faacb"
                class="w-layout-cell"
              >
                <div
                  id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c36-958faacb"
                  class="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Getting Started</p>
                    <h1 class="imb-typography-light">What's your email?</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
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
                        <div id="onboarding-input-email" class="imb-input">
                          <label for="field" class="imb-input-label">
                            Email
                          </label>
                          <input
                            class="imb-input-field w-input"
                            maxlength="256"
                            name="field"
                            data-name=""
                            placeholder="Type something"
                            type="text"
                            id="field"
                          />
                          <div class="imb-input-error-message">
                            * Email is required
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="hidden"
                              name="cf-turnstile-response"
                              id="cf-chl-widget-27tml_response"
                              value="0.Hjp06h8_it0Yah1sPIRk4IMdEkvcBGvg_b9go5vfmJF9MAri_VGfEYGKTNKW4Y6VOpD9Qi-XCe0V953XH-nFUSFaEsqPjHXJGP5C_yojNtwja0g4tzPatbAWH3Dk-utbNL526Z3rBD3MI46KEdheVF14rldBt3JKcNAxlqH5K1LM4g7Q2FmTOe4JT1xVQmGDQJCQbthc5CQrAi3IT0VQ1CteXC4N73gqiakTEd3Qw2ip3hOt-ZuZaMGrnc54JNMBuW5D7SfcRoGCVv_BecLPOUgPMr7XsKM0vyz6a47nmB60X08VyVwwMCd9Bd_GvxMQ9oRxAV1edBe8qcE5n7XUmIek0RXvzyg7Yr1wHFdhBsjyVWfpoNqgGAIWpfeAAmGAPqP3_On_emSzLvXgMaK91nXKY5mWK4FR5c7EmLW3wM28kTSOT9LiLrYS-VKFnlGf4Khz5d1lF0ils7UEUM0TgIgk6hgX0fUaWB9f9VSIef4X95hgYMIVZK7bj_2IACX4LEYhhS7O7m96dCyn5SfUYKFtmzZcbTQlqkLwUBsYBIE0fkujiikrSMXG2IfKPjMj1kGLuygeeRZZju09nkHOiEDQxxovba1P7f938qlv2pIuSiAXePJ_Tw1s4R7gmIN4e-Kv0rpxHvRmBFKuegp3B8TR7XJJK5U94hZ9wjWQD4ucN50GNyZ8MKRv5hUsv7WiYimKLUKtemQxb7r5Ps-0b_dxSTZVrSSEHHtAg0z8n4NhrDWQQvXE0pmE3GCjEOHq52z1M7ZjwP0_IgKVs8a_RTs9vXTtnj8PeAB1VVYw6eGQc23eijTSFdZ9uxNGyi2RhsAopPGlge4nAsuO-c1-rTvhWVZ-xpHfqQHH4A0xGOnlqc1fmQRkQ-f6vpywuSqK.DnpLLquryx5o5hOy7VkHDw.e883466b5494fdda2cae832f8e6b4613b1826f32b0df70d402c01079452e0a27"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        class="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        class="w-form-fail"
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
                  <div class="w-layout-cell">
                    <div
                      id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c49-958faacb"
                      class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-1-button-back"
                          class="imb-button imb-button-outline"
                        >
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-1-button-next"
                          class="imb-button imb-button-with-icon"
                          onClick={getToPhonePage}
                        >
                          <p class="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            class="imb-button-icon"
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
          class="w-layout-cell"
        >
          <div id="onboarding-section-2" class="imb-display-none">
            <div
              id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4335-958faacb"
              class="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4336-958faacb"
                class="w-layout-cell"
              >
                <div class="imb-stepper">
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4338-958faacb"
                class="w-layout-cell"
              >
                <div
                  id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4339-958faacb"
                  class="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Getting Started</p>
                    <h1 class="imb-typography-light">
                      What's your phone number?
                    </h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
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
                        <div id="onboarding-input-phone" class="imb-input">
                          <label for="field" class="imb-input-label">
                            Phone Number
                          </label>
                          <input
                            class="imb-input-field w-input"
                            maxlength="256"
                            name="field"
                            data-name=""
                            placeholder="Type something"
                            type="text"
                            id="field"
                          />
                          <div class="imb-input-error-message">
                            * Phone number is required
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="hidden"
                              name="cf-turnstile-response"
                              id="cf-chl-widget-ehbxc_response"
                              value="0.XjlTcKx5pbhzMwUpuz3fOI58WaLhITqfj7x2_HC6XX50fDaDPllv9UIF-3zx-1ZrrLB9xsKxQ7eNu5Jg1UXS623P4yDVXhVkmQoLzs97BFovRroJ0P1IpxAJHDNtHSSEr64qqlAyxxDHMqlCXcN0uzxoupPbZPdY4On_5y7zQSKDUxQZUQFnBBCBx_PyZ9Hj5XLBIPMdCM0vtwAAQSDUFMg98ei5Rd0jxn3s2zfj6uhxL-H8gFWpAdo1I9O_suU155IoPgNPAoyWfLpekTpBvFEwRWDUirBB20lWOt7Mx43-6lYK-aJ9lK_OyGPrhhZ-pUWEASaEpQnfyONPzZM9IwVeBtN5wO7ZWiLBPSFy3kFgF4RCKaRgfbE3n_13jo69uB8p9WPN6i-RzO59SEVhb9OZM3wl9pakqCRSWrSo0Vz_1zcpqzA0EiSSocQkHojyuTThwsGETZdMFSP2QO3otx2fLX5dIqBLbmge3SaYzEgNY5zpsGWNtHPRjW9Rck8o3fRbADgZbp_OQg00T7fe00Dsx4vBnOl0wtwPJN272QJIexq0g-cyDHXC1nS4H4NweiUrgv7NdU3EaYEyJX-GBTg1YRhwHgOopLiulVmWe6-1EmOvrDaON9aOxl2lWztcnKGUrZehSJWzXI7COwXVuH24SCvkDJbV1K28RFsq2hAflCxKmWzX1S0kDCsLYGAy_RfvNaYxmkrIF6I7VHErIeF6jf1EwBLEWH-Jr83I5FyLgGv3Jgh4ADaxyEUXxo5n6c3cltFS4gy6kJYWSOIDS9Eb6ibBCE4-NHS-ak7S9ushgN_6neGPMorFNPqlxCdB7hJN_shIdkYwenP2t2ma43p8B6L2UfxgR9HtgjtXi6uvrePqjO9P3wBAgf9_6nsL.vlIegPKBfkAA0t-PohCLLA.ea3f504582d57df07d7cad566098d19be6faa1385624a929f964ed6c26559fe5"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        class="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        class="w-form-fail"
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
                  <div class="w-layout-cell">
                    <div
                      id="w-node-fbec7a83-5c75-021b-4c22-a03f24af434c-958faacb"
                      class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-2-button-back"
                          class="imb-button imb-button-outline"
                        >
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-2-button-next"
                          class="imb-button imb-button-with-icon"
                          onClick={getToPersonalDetailsPage}
                        >
                          <p class="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            class="imb-button-icon"
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
          class="w-layout-cell"
        >
          <div id="onboarding-section-3" class="imb-display-none">
            <div
              id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35394-958faacb"
              class="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35395-958faacb"
                class="w-layout-cell"
              >
                <div class="imb-stepper">
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block imb-stepper-step-active"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                  <div class="imb-stepper-step">
                    <div class="imb-stepper-step-block"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35397-958faacb"
                class="w-layout-cell"
              >
                <div
                  id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35398-958faacb"
                  class="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Personal Details</p>
                    <h1 class="imb-typography-light">Let's get to know you</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
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
                          class="w-layout-layout imb-stack wf-layout-layout"
                        >
                          <div class="w-layout-cell">
                            <div
                              id="onboarding-input-firstname"
                              class="imb-input"
                            >
                              <label for="field" class="imb-input-label">
                                First Name
                              </label>
                              <input
                                class="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                              />
                              <div class="imb-input-error-message">
                                * First name is required
                              </div>
                            </div>
                          </div>
                          <div class="w-layout-cell">
                            <div
                              id="onboarding-input-middlename"
                              class="imb-input"
                            >
                              <label for="field" class="imb-input-label">
                                Middle Name
                              </label>
                              <input
                                class="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                              />
                              <div class="imb-input-error-message">
                                * Middle name is required
                              </div>
                            </div>
                          </div>
                          <div class="w-layout-cell">
                            <div
                              id="onboarding-input-lastname"
                              class="imb-input"
                            >
                              <label for="field" class="imb-input-label">
                                Last Name
                              </label>
                              <input
                                class="imb-input-field w-input"
                                maxlength="256"
                                name="field"
                                data-name=""
                                placeholder="Type something"
                                type="text"
                                id="field"
                              />
                              <div class="imb-input-error-message">
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
                              id="cf-chl-widget-41pg3_response"
                              value="0.L6TU4_n2P5EuqeNBuMNrvrT4Se0ohFmcu0I806tlIr4i2abVotzOc6H_sAyopWXiw35Qp753JskMQDpNxsoh6VYFhe3PRMAv3wePYFtWI-HIHm4ys1d8q-GiT30VE_WTNZhkJ4NEQHmK1i4HUUFoQDe9lqSFmFRg8VWsaMwmasUc-wKqbPSP-_sUVr3176jci9gAEEgzDZBBSb7viIWw9aYunX61oaKbWhlzAMP21l6O8iNzJ-oG4FudFS6A46TKxSmrTlmfRcHur5GnvPSj8M6uaUWlzaPVKi8H_9Nnp_z5KA5C8JAoWL1oXVZZA_WrMiwY3XqTGnMproqjDCbifWx3zZHzeEc_TtjQCxgkPPmSeAP7MPT4lGOAYX5hVKH8S7nxT1AUZSbPTmnElX9i6AAukRO-KyZFW-CYFq9mMJe0zQRetz3bdkhIGc6QLNMsBVqYZMBeFe_VGJBNblr3od2acz7kNE5dBceU5WGh5LKEs8N5WDbhpCQVIfDg6uEwBZt__0zfFBzHhnQa7VwJJTKeNDO-rBQ5sufvDI33fF0qDJD2_FMrKBSifIG1QWC9cw5fiQHV0I0ynohvv5anzcg6gYvaxeVEvKdoEXA2ge8YbZ3KP-vLA9CQtSO_F83BVnI7ehP3dbUdtrb5VO0iaNpQo4DpI8Mjzso6nY53diRBuyrt6yogjnwiWC33iC_XlLy2y7ehf9ae7sVlUE8fL6iiym2BV3jxp4eqRuAXJhVayzmDRlaIPxd4Szc69U102PQkmrmknrSu7ADWK_IFmhtRfiZmnZWINZDjErPwA-zQD60Dg81iFR6AZ7BpQVMktW-Vft1jB9Rh0WyRYkpLXeON5HGKX0d7qCVZx4ryA3KFlG4qoM1BgNoLzcRNvOHJ.ay3iPevWyyV7tTbES-tPcw.2eadf6821f90efd5cede7dd7aa0169e0e34050b9ce678efe6b5420a147ddeec2"
                            />
                          </div>
                        </div>
                      </form>
                      <div
                        class="w-form-done"
                        tabindex="-1"
                        role="region"
                        aria-label="Email Form success"
                      >
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div
                        class="w-form-fail"
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
                  <div class="w-layout-cell">
                    <div
                      id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353b5-958faacb"
                      class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-3-button-back"
                          class="imb-button imb-button-outline"
                        >
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-3-button-next"
                          class="imb-button imb-button-with-icon"
                          onClick={getToSuccessPage}
                        >
                          <p class="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            class="imb-button-icon"
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
          class="w-layout-cell"
        >
          <div id="onboarding-section-4" class="imb-display-none">
            <div
              id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf6-958faacb"
              class="w-layout-layout imb-stack wf-layout-layout"
            >
              <div
                id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf7-958faacb"
                class="w-layout-cell"
              >
                <div
                  id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf8-958faacb"
                  class="w-layout-layout imb-stack wf-layout-layout"
                >
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Personal Details</p>
                    <h1 class="imb-typography-light">
                      Let's confirm your details
                    </h1>
                  </div>
                  <div class="w-layout-cell">
                    <div
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cff-958faacb"
                      class="w-layout-layout imb-stack wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Full Name</h4>
                          <p id="onboarding-preview-name" class="imb-lv-value">
                            John Doe
                          </p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Email</h4>
                          <p id="onboarding-preview-email" class="imb-lv-value">
                            john@gmail.com
                          </p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Phone</h4>
                          <p id="onboarding-preview-phone" class="imb-lv-value">
                            +62 1234 5678
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-layout-cell">
                    <div
                      id="w-node-f9ecb76b-64dc-778a-c664-5860e8064d0d-958faacb"
                      class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout"
                    >
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-4-button-back"
                          class="imb-button imb-button-outline"
                        >
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div
                          id="onboarding-4-button-next"
                          class="imb-button imb-button-with-icon"
                          onClick={getToStarterPage}
                        >
                          <p class="imb-button-text">Next</p>
                          <img
                            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
                            loading="lazy"
                            alt=""
                            class="imb-button-icon"
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
      </div>
    </div>
  );
}

window.HiddenShowPage = HiddenShowPage;

export default HiddenShowPage;
