import AuthenticationModal from "components/Modals/AuthenticationModal";
import React, { useState } from "react";
import {
  BoldText,
  BootomNavigation,
  ButtonWrapper,
  CloseIconWrapper,
  CustomeButton,
  CustomeButton2,
  EmailForm,
  EmailInput,
  FeeBackText,
  FinalMessage,
  HeaderFont,
  MainWrapper,
  ModalWrapper,
  SignUpButton,
  TermsText,
  TextDiv,
  UndlerLine,
  Wrapper,
} from "./Authentication.style";
import CloseIcon from "assets/images/close.png";
import Google from "assets/images/google.png";
import Leftarrow from "assets/images/leftarrow.png";
import Email from "assets/images/email.png";
import { withFormik } from "formik";

const Authentication = () => {
  const [isOpen, setOpen] = useState(false);
  const [screen, setScreen] = useState(1);
  const OpenModal = () => {
    setOpen(true);
  };
  const CloseModal = () => {
    setOpen(false);
  };
  const FinalCLick = () => {
    setOpen(false);
    setTimeout(() => {
      setScreen(1);
    }, 200);
  };
  const BackSteps = () => {
    setScreen(1);
  };
  const MyForm = (props) => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      dirty,
    } = props;
    return (
      <EmailForm onSubmit={handleSubmit}>
        <EmailInput
          id="email"
          placeholder="Email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isError={errors.email && touched.email}
          className={
            errors.email && touched.email ? "text-input error" : "text-input"
          }
        />
        {errors.email && touched.email && (
          <FeeBackText>{errors.email}</FeeBackText>
        )}

        <CustomeButton2
         disabled={errors.email?false:touched.email?false:true}
          style={{ marginTop: "3.2rem" }}
          onClick={()=>setScreen(3)}
          isDisabled={errors.email?false:touched.email?false:true}
        >
          Submit
        </CustomeButton2>
      </EmailForm>
    );
  };

  const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ email: "" }),

    // Custom sync validation
    validate: (values) => {
      let errors = { email: "" };
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email address.";
      }
      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(true);
        setScreen(3);
      }, 1000);
    },

    displayName: "BasicForm",
  })(MyForm);
  const SigUpWithEmail = () => {
    setScreen(2);
  };

  const RenderModalScreens = (screen) => {
    switch (screen) {
      case 1:
        return (
          <MainWrapper>
            <HeaderFont>Join Xronos.</HeaderFont>
            <ButtonWrapper>
              <SignUpButton>
                <img src={Google} width={18} />
                Sign up with Google
              </SignUpButton>
              <SignUpButton onClick={SigUpWithEmail}>
                <img src={Email} width={20} />
                Sign up with email
              </SignUpButton>
            </ButtonWrapper>
            <TextDiv>
              Already have an account? <BoldText> Sign In</BoldText>
            </TextDiv>
            <TermsText>
              By signing up, you agree to Xronos{" "}
              <UndlerLine>Terms of Service</UndlerLine> and{" "}
              <UndlerLine>Privacy Policy</UndlerLine>.
            </TermsText>
          </MainWrapper>
        );
      case 2:
        return (
          <MainWrapper>
            <HeaderFont style={{ marginBottom: "2.5rem" }}>
              Sign up with email
            </HeaderFont>
            <TextDiv>Enter your email to create an account.</TextDiv>
            <MyEnhancedForm />
            <BootomNavigation onClick={BackSteps}>
              <img src={Leftarrow} width={9} /> All sign up options
            </BootomNavigation>
          </MainWrapper>
        );
      case 3:
        return (
          <MainWrapper>
            <HeaderFont style={{ marginBottom: "2.5rem" }}>
              Check your inbox.
            </HeaderFont>
            <FinalMessage>
              Click the link we sent to <b>john@email.com</b> to complete your
              account set-up.
            </FinalMessage>

            <CustomeButton style={{ marginTop: "3.2rem" }} onClick={FinalCLick}>
              Ok
            </CustomeButton>
          </MainWrapper>
        );
    }
  };
  return (
    <>
      <Wrapper>
        <CustomeButton onClick={OpenModal}>Click</CustomeButton>
      </Wrapper>
      <AuthenticationModal open={isOpen} onClose={CloseModal}>
        <ModalWrapper>
          <CloseIconWrapper>
            <img src={CloseIcon} width={24} onClick={CloseModal} />
          </CloseIconWrapper>
          {RenderModalScreens(screen)}
        </ModalWrapper>
      </AuthenticationModal>
    </>
  );
};
export default Authentication;
