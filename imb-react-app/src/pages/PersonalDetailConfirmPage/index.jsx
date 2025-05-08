import React from "react";
import PrimaryButton from "../../components/ButtonPrimary";
import SecondaryButton from "../../components/ButtonSecondary";
import axios from "axios";

function PersonalDetailsConfirmPage({ next, prev, userData }) {
  console.log("--- components / PersonalDetailsConfirmPage ---", userData);
  const submitRegistration = ({ userData }) => {
    console.log("--- submitRegistration ---", userData);
    axios
      .post("https://68183f135a4b07b9d1ce55e0.mockapi.io/test/user", {
        name: `${userData.firstName} ${
          userData.middleName ? userData.middleName + " " : ""
        }${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
      })
      .then((response) => {
        console.log("Success:", response.data);
        next();
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  function handleSubmit() {
    submitRegistration({ userData });
  }
  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[654px] w-full sm:mr-10 h-full flex justify-between flex-col">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Personal Details</h5>
          <h1 className="origination-steps-title">
            Let's confirm your details
          </h1>
          <h6 className="mb-4 text-md">
            Ensure that your details are accurate and proceed to the next steps.
          </h6>

          <div className="info-section mt-10">
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Full Name</p>
              <p className="p2 uppercase">{`${userData.firstName} ${
                userData.middleName ? userData.middleName + " " : ""
              }${userData.lastName}`}</p>
            </div>
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Email</p>
              <p className="p2 uppercase">{`${userData.email}`}</p>
            </div>
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Phone</p>
              <p className="p2 uppercase">{`${userData.phone}`}</p>
            </div>
          </div>
        </div>

        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton label="Back" onClick={prev} />
          <PrimaryButton label="Confirm" arrow onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.PersonalDetailsConfirmPage = PersonalDetailsConfirmPage;

export default PersonalDetailsConfirmPage;
