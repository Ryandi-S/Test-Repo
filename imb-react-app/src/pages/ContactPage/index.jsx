import React from "react";
import PrimaryButton from "../../components/ButtonPrimary";
import SecondaryButton from "../../components/ButtonSecondary";

const PageStep = {
  Email: 1,
  Number: 2,
  Verification: 3,
};

function ContactPage({ next, prev, skipPrev, page, userData, setUserData }) {
  // const { updateOriginationForm, originationForm } = useStore();
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [emailError, setEmailError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [numberError, setNumberError] = React.useState({
    status: false,
    message: "",
    type: "",
  });

  // const [usersData, setUsersData] = React.React.useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/get-users");
  //       const result = await response.json();
  //       setUsersData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  function handleNext() {
    next();
  }

  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[550px] w-full sm:mr-10  h-full flex flex-col justify-between">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Getting Started</h5>

          {page === PageStep.Email && (
            <div>
              <h1 className="origination-steps-title">What’s your email?</h1>
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  });
                  setEmail(e.target.value);
                  setEmailError((prev) => ({
                    ...prev,
                    status: false,
                  }));
                }}
                className={`input !w-full h-9 mr-4 origination-input-text px-0 minimal-input  ${
                  emailError.status ? "text-fg-danger-neutral" : ""
                }`}
              />

              {emailError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {emailError.message}
                </p>
              )}
            </div>
          )}

          {page === PageStep.Number && (
            <div>
              <h1 className="origination-steps-title">
                What’s your phone number?
              </h1>

              <input
                className={`input !w-full h-9 mr-4 origination-input-text px-0 minimal-input  ${
                  numberError.status ? "text-fg-danger-neutral" : ""
                }`}
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    phone: event.target.value,
                  });
                  setPhoneNumber(event.target.value);
                  setNumberError((prev) => ({
                    ...prev,
                    status: false,
                  }));
                }}
              ></input>

              {numberError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {numberError.message}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton label="Back" onClick={prev} />
          <PrimaryButton label="Next" onClick={handleNext} arrow />
        </div>
      </div>
    </div>
  );
}

window.ContactPage = ContactPage;
// Remove below line if you don't want to attach to window
export default ContactPage;
