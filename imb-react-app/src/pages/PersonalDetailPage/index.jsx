import React from "react";
import PrimaryButton from "../../components/ButtonPrimary";
import SecondaryButton from "../../components/ButtonSecondary";

function PersonalDetailsPage({
  next,
  prev,
  page,
  skipPrev,
  userData,
  setUserData,
}) {
  // const { updateOriginationForm, originationForm } = useStore();

  const [title, setTitle] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [openDropdown, setOpenDropdown] = React.useState(false);

  //! --------------------- Error states ---------------------
  const [titleError, setTitleError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [firstNameError, setFirstNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [lastNameError, setLastNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [middleNameError, setMiddleNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });

  const titleOptions = React.useMemo(
    () => ["Mr", "Mrs", "Miss", "Dr", "Prof"],
    []
  );

  function handleNext() {
    // switch (page) {
    //   case PageStep.Name:
    //     let hasError = false;

    //     if (title === "") {
    //       setTitleError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "Please select a title",
    //       }));
    //       hasError = true;
    //     }
    //     if (firstName === "") {
    //       setFirstNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "You must include your first name",
    //       }));
    //       hasError = true;
    //     }
    //     if (lastName === "") {
    //       setLastNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "You must include your last name",
    //       }));
    //       hasError = true;
    //     }

    //     const validNamePattern = /^[a-z ,.'-]+$/i;

    //     if (firstName !== "" && !validNamePattern.test(firstName)) {
    //       setFirstNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }
    //     if (lastName !== "" && !validNamePattern.test(lastName)) {
    //       setLastNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }
    //     if (middleName !== "" && !validNamePattern.test(middleName)) {
    //       setMiddleNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }

    //     if (hasError) {
    //       return;
    //     }

    //     hasError = false;
    //     // updateOriginationForm({
    //     //   name: { title, firstName, middleName, lastName },
    //     // });
    //     break;

    //   default:
    //     break;
    // }
    next();
  }

  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[550px] w-full sm:mr-10  h-full flex flex-col justify-between">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Personal Details</h5>
          <h1 className="origination-steps-title">Let's get to know you</h1>
          <div>
            <h4 className="origination-input-label">What's your name?</h4>

            <div className="name-container flex sm:flex-row flex-col sm:mt-5 mt-0 gap-8 sm:gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="*First name"
                  value={firstName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      firstName: e.target.value,
                    });
                    setFirstName(e.target.value);
                    setFirstNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    firstNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {firstNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {firstNameError.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="Middle name"
                  value={middleName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      middleName: e.target.value,
                    });
                    setMiddleName(e.target.value);
                    setMiddleNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    middleNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {middleNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {middleNameError.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="*Last name"
                  value={lastName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      lastName: e.target.value,
                    });
                    setLastName(e.target.value);
                    setLastNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 mr-3 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    lastNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {lastNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {lastNameError.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton
            label="Back"
            // onClick={() => {
            //   if (
            //     !(
            //       originationForm.accounts &&
            //       originationForm.accounts.transaction
            //     )?.transaction &&
            //     page === PageStep.Name
            //   ) {
            //     skipPrev();
            //   } else {
            //     prev();
            //   }
            // }}
            onClick={prev}
          />
          <PrimaryButton label="Next" onClick={handleNext} arrow />
        </div>
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.PersonalDetailsPage = PersonalDetailsPage;

export default PersonalDetailsPage;
