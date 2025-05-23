import React from "react";
import "./function.jsx"; // page main script
import "../../components/Stepper/index.jsx";

const HiddenShowPage = () => {
  const stepperConfig = [
    {
      section: "onboarding-section-0",
      prevButton: "",
      nextButton: "onboarding-0-button-signup",
      stepperIndex: 0
    },
    {
      section: "onboarding-section-1",
      prevButton: "onboarding-1-button-back",
      nextButton: "onboarding-1-button-next",
      stepperIndex: 1
    },
    {
      section: "onboarding-section-2",
      prevButton: "onboarding-2-button-back",
      nextButton: "onboarding-2-button-next",
      stepperIndex: 2
    },
    {
      section: "onboarding-section-3",
      prevButton: "onboarding-3-button-back",
      nextButton: "onboarding-3-button-next",
      stepperIndex: 3
    },
    {
      section: "onboarding-section-4",
      prevButton: "onboarding-4-button-back",
      nextButton: "onboarding-4-button-next",
      stepperIndex: 4
    },
    {
      section: "onboarding-section-5",
      prevButton: "onboarding-5-button-back",
      nextButton: "",
      stepperIndex: 0
    }
  ]
  /* eslint-disable-next-line no-undef */ // ? function is defined globally
  HiddenShowPageFunction({ ReactProp: React, stepperConfig });

  return (
    <div class="w-layout-blockcontainer imb-container w-container">
      <div id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6525-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
        <div id="w-node-d73717e3-3569-745f-9cdc-cdcb725c6526-958faacb" class="w-layout-cell">
          <div id="onboarding-section-0">
            <div id="w-node-_6b9b8836-3af6-4010-bb66-611502498a18-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div class="w-layout-cell">
                <div id="w-node-_6b9b8836-3af6-4010-bb66-611502498a1a-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary">Get Started</p>
                    <h1 class="imb-typography-light">Start your journey with <span class="imb-color-primary">IMB</span>.</h1>
                  </div>
                  <div class="w-layout-cell">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id.</p>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-layout-grid grid">
                      <div>
                        <div id="onboarding-0-button-login" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Login</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                      <div>
                        <div id="onboarding-0-button-signup" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Sign up now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-layout-cell"><img loading="lazy" src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg" alt="" /></div>
            </div>
          </div>
        </div>
        <div id="w-node-c9433695-ac55-b826-c273-0b458e3ae835-958faacb" class="w-layout-cell">
          <div id="onboarding-section-1">
            <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c32-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c33-958faacb" class="w-layout-cell">
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
                </div>
              </div>
              <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c35-958faacb" class="w-layout-cell">
                <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c36-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Getting Started</p>
                    <h1 class="imb-typography-light">What's your email?</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="681c34e75e7ea102958faacb" data-wf-element-id="8d4f01c3-cdbb-cf6b-f671-6c5344d73c3e" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                        <div id="onboarding-input-email" class="imb-input">
                          <label for="field" class="imb-input-label">Email</label><input class="imb-input-field w-input" maxlength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="abc" />
                          <div class="imb-input-error-message">* Email is required</div>
                        </div>
                        <div>
                          <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-j9jvc_response" value="0.VZgAzSAeqCHzZcNozhWYrFmEjJWzGCJL5RMETno_wKZHJxKZvQvTUPNA9gZ7Omc9nBFUrVzmM-9cWowWZymNHhWwr0mwFGPm0sG_STCYZ3mhx540pEF_9kKCUCKusS_l7W0utGv6I5Y_doF1_Xm-wBU-j4YbHYJzD0DCY2xVR8ujyl-6e21BxjuN51N1vVHxQsPrr4dNtmqNNhBX0cKN-XsUgDHarK3dz7GgysjodQY5NYNwLb9Nv2jjN5w6dVGbb_-TUpo1wMINzY_AQn-y3b17V1QCY9eETUxXtNrMFxp-U8STGM_2sWF22Vi1RMP5HQwH2dJiI1K-TY4_-OfHe7BB51_bk5IvbSgTReNzeqHWadD-Ov4NJPFdc9R-2mutXgmoy-7HOAp7r9J6Os4FTtzrENEMAbWGyrPMDWje-dXE4lZu3UUAqnPMsqgJifLH9xWp90JrX8NieUk_aKWN5ZvXH05ADeri6tcRBGwIrpq_Fp77mW0IuD36HVxA_owANb0XeQhvXrTtsmk-zPrH22C92fmG3GRgUd1HwScT0ugNjOT5zRrk09Xvm2f0KZnX91DQm2Y2hR0F67IYpjMhDduVAvh9hlKV20HwbVe2HTDj_8wG-RD-S-EpIXjCiyzXQH6DqSw6cQzjH5g0oHExCQYGf15wdMwBY4i9U-3keH4jOULG04k73lq50ATUERTjx56018fGQHOdxSKs7xIHqR6FUgD0C2krZIu7zod3vmJujxXVF1l3gqqz3WJBimoPaToN9Zqmm6aWQWzkeupqFrZbaW5sc0vZEnMHV3HW1ARzvlgNs1wdPSqzFqaNm_tln1kocXtaRSsL3vHLzm1y-Q.tXoULBSfIh3SvxXsry9GcQ.30b74b502e4b820504f9f1515e21241a7a4475a15d842cabcc002e767f88f3e4" /></div>
                        </div>
                      </form>
                      <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-_8d4f01c3-cdbb-cf6b-f671-6c5344d73c49-958faacb" class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                      <div class="w-layout-cell">
                        <div id="onboarding-1-button-back" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div id="onboarding-1-button-next" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Next</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-adf6161a-df29-7cf5-77ec-7c4c530042eb-958faacb" class="w-layout-cell">
          <div id="onboarding-section-2">
            <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4335-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4336-958faacb" class="w-layout-cell">
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
                </div>
              </div>
              <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4338-958faacb" class="w-layout-cell">
                <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af4339-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Getting Started</p>
                    <h1 class="imb-typography-light">What's your phone number?</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="681c34e75e7ea102958faacb" data-wf-element-id="fbec7a83-5c75-021b-4c22-a03f24af4341" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                        <div id="onboarding-input-phone" class="imb-input">
                          <label for="field" class="imb-input-label">Phone Number</label><input class="imb-input-field w-input" maxlength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="abc" />
                          <div class="imb-input-error-message">* Phone number is required</div>
                        </div>
                        <div>
                          <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-zgae3_response" value="0.qLsfTPqVp2Ry8zzq6RaB2dWuMaRAGM0f5Sw9AbUhhcLHuHmJ1i_Kxt4dhqVM1L16qShTsPK-8-U5WsfKDfBJeNnVnrZcYa3BF-CXG6BsLsy0FU0vJWCLhOlGXB0muMsuKz34oC8fALE93hTrsK3ItGF45NPi0iFaRcleBc82s7P7kYnJbEAkMJTXXQi07lHSDbEhxaxOCIOM44W8NGiy7A49wWTtk74QBjk26pdBiTmot1m-QlVy0m3dFVG-x6LbxyqTqMFlx2T5n11vhygnLnqCaWVenaBT3rqUm-m4cMizQA_cykwt2BSvR5DsU6eLk0q0jPI5CAlVLWswbIkSAgJ4XlZhYd3I1xj21OJ70aACVhfEA16iNgi3ugXBiloq4pRJhGucYrF1a3e5fhEPj4026YOGoZuuEnybPJgrdRqc2QDd1B7a__v2Hz3lqNUTYSvubWAhwKEE_D_XJgpKe0Fs4_3C1lJRL7IodRKsuuy-bixhg_qzoX1DLxVzOeW1UO3-A4wn9ULZA-_5pkvPj41pE_DeIO9pSFTDDU_0rg7Z7AZWs8UJlibVP0DBjb8vjkYaxFQDmsr8m2xxngp73_sHIC9p8KJTuotgTi65eomQv8UT6bBTyWZmHlfacXnkv7eR9lwCi3LevQ_FkjoDrreI2jkiwboI6MdySLvkv-tvV8uZIwSrX6erVh4gsUF_bRmgcJCpd6urK0iGzz__gnH4kvfa0nS5GQoEpl1bcWlW5l-EPjCdRHcH1OxnCYM5OYks96YPeQtB4YrcSF6UzqC97_OJVHCaWzdiEgGLVXzWc0EVrb0CqooekZWcA0l4qkZgkeMb8SgV8KLnpZx-IA._pRkFqJH0ImdQXh70oYnQA.3164bd2a91401ea59623a42748475d7496f48a5322ebd531dc9ed8ef6810f875" /></div>
                        </div>
                      </form>
                      <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-fbec7a83-5c75-021b-4c22-a03f24af434c-958faacb" class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                      <div class="w-layout-cell">
                        <div id="onboarding-2-button-back" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div id="onboarding-2-button-next" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Next</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-c7724385-fa1e-984f-ae37-eafa54f7830c-958faacb" class="w-layout-cell">
          <div id="onboarding-section-3">
            <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35394-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35395-958faacb" class="w-layout-cell">
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
                </div>
              </div>
              <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35397-958faacb" class="w-layout-cell">
                <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c35398-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Personal Details</p>
                    <h1 class="imb-typography-light">Let's get to know you</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div class="w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="681c34e75e7ea102958faacb" data-wf-element-id="0b34ad53-4740-686f-8eaf-62f447c353a0" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Email Form">
                        <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353a1-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                          <div class="w-layout-cell">
                            <div id="onboarding-input-firstname" class="imb-input">
                              <label for="field" class="imb-input-label">First Name</label><input class="imb-input-field w-input" maxlength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="abc" />
                              <div class="imb-input-error-message">* First name is required</div>
                            </div>
                          </div>
                          <div class="w-layout-cell">
                            <div id="onboarding-input-middlename" class="imb-input">
                              <label for="field" class="imb-input-label">Middle Name</label><input class="imb-input-field w-input" maxlength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="abc" />
                              <div class="imb-input-error-message">* Middle name is required</div>
                            </div>
                          </div>
                          <div class="w-layout-cell">
                            <div id="onboarding-input-lastname" class="imb-input">
                              <label for="field" class="imb-input-label">Last Name</label><input class="imb-input-field w-input" maxlength="256" name="field" data-name="" placeholder="Type something" type="text" id="field" data-type="abc" />
                              <div class="imb-input-error-message">* Last name is required</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-9fl5n_response" value="0.Q4wTeXj6bs1onguPZ4DPWwF0nrw2pexZv4xQF3moironzM6_vv4nD3qtvfTth3QaMGG6GDU4yh2DQjbaPENIuOHTkmQviHPyfD42k_tuE58gRZX2lKiTi-d0Qv8eIlUQwFW5t9z6DEz_LfHbC7JDy4iYllo9e9pqVIP4PRsQfMZhMatHHcRv1WP_npCnyCfoVh4hyIMq8ObwzmcKLL14o775EhRqLQVnwIi1idZX3gaX8T317_NOx8XP1mef7gqTDm1mM3vIv72BfFHEYNiCNj7AHG92M9GpmhagVtlM6LzmReey-PJ7ArTaZLHdFz4O6Fd5_i92LrFfIfhfhJlxERqFZmNM-PuZ7imo6r6mHlDwJ2yQgRJOo45IutGe79xk5ukT3JxkLI1QsvOzqxKO8LbOhjAEZvYKIqs8XGUcbi1wYqG5c0aDqBXbkSbmjBn9J5jF2HuUx8JV0cPxcnt21cTzvFT6maLjz5z8v-BxMXhYjOq9kq-jUstULRX0g2qH8SbmAg2wVSCh_NPb1VbJMsBtpu07sEs0SSXJ7ZjtLaJ9FkLEjpUhXJDKKQZHK597az9-UMAAesWC94RUqYqVQylSmkC02EfDngPPmqBjjU0wQl_lSk2h6AoD8fkQZSqOmbgYL_bI67yD9U4kCIU1m6hZCuToIAB00pMrXegI5apxmjLR5aUhXaUFbdC9QF3Hb9JROKHfbs_IoNSER2RUkyY-eb7Gb_SqqKXA8wHiiCXwvMsVbvzGhu_FDACDApTAg6FkcRIjtQ77YO2tShBpJKzYz8L2XEHbAVP0ymIUHd5O6L5J9H3oDCrFidQwy1b9-XVPTLHhjY4AWDcOh7EBjQ.vw9RkLxAj2yk8TEKz4-T3w.08ffcbd52f647965e264230b652164f95a0ee9416473804a4a3bb1123768d275" /></div>
                        </div>
                      </form>
                      <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-_0b34ad53-4740-686f-8eaf-62f447c353b5-958faacb" class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                      <div class="w-layout-cell">
                        <div id="onboarding-3-button-back" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div id="onboarding-3-button-next" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Next</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-c32a3559-6741-dcef-b060-169b2e288f60-958faacb" class="w-layout-cell">
          <div id="onboarding-section-4">
            <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf6-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf7-958faacb" class="w-layout-cell">
                <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cf8-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary-2">Personal Details</p>
                    <h1 class="imb-typography-light">Let's confirm your details</h1>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064cff-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Full Name</h4>
                          <p id="onboarding-preview-name" class="imb-lv-value">John Doe</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Email</h4>
                          <p id="onboarding-preview-email" class="imb-lv-value">john@gmail.com</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div class="imb-lv-display">
                          <h4 class="imb-lv-label">Phone</h4>
                          <p id="onboarding-preview-phone" class="imb-lv-value">+62 1234 5678</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-f9ecb76b-64dc-778a-c664-5860e8064d0d-958faacb" class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                      <div class="w-layout-cell">
                        <div id="onboarding-4-button-back" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Back</p>
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div id="onboarding-4-button-next" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Next</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_9649efbb-1b11-345b-266a-3b1879770036-958faacb" class="w-layout-cell">
          <div id="onboarding-section-5">
            <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891cf-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
              <div class="w-layout-cell">
                <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891d1-958faacb" class="w-layout-layout imb-stack wf-layout-layout">
                  <div class="w-layout-cell">
                    <p class="imb-color-primary">Success</p>
                    <h1 class="imb-typography-light">Welcome to IMB, <span class="imb-color-primary">John</span>.</h1>
                  </div>
                  <div class="w-layout-cell">
                    <p>Congratulations on opening your account with us! We're thrilled to have you as a part of our community. We make banking a breeze at IMB. Feel free to reach out here if you have any questions or need assistance.</p>
                  </div>
                  <div class="w-layout-cell">
                    <div id="w-node-d063f4b7-329a-6f2d-0599-872182b891de-958faacb" class="w-layout-layout imb-stack imb-stack-inline wf-layout-layout">
                      <div class="w-layout-cell">
                        <div id="onboarding-success-button-begin" class="imb-button imb-button-with-icon">
                          <p class="imb-button-text">Let's Begin</p>
                          <img src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg" loading="lazy" alt="" class="imb-button-icon" />
                        </div>
                      </div>
                      <div class="w-layout-cell">
                        <div id="onboarding-success-button-getapp" class="imb-button imb-button-outline">
                          <p class="imb-button-text">Get the App</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-layout-cell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.HiddenShowPage = HiddenShowPage;

export default HiddenShowPage;
