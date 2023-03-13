import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useBazaarStepperdStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { Planview } from "@/components/molecules/PlanCard";
import PaymentDetails from "@/components/molecules/PaymentDetails/PaymentDetails";

const steps = ["Choose Plan", "Payment Details"];

export default function RevenewPlan() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  const classes = useBazaarStepperdStyles();

  return (
    <DashboardLayout>
      <SectionHeader />
      <div className={classes.root}>
        <div className="headContainer">
          <div className="icon">
            <img src={LogoPrev} alt={"Logo"} />
          </div>
          <div className="headTitle">Renew Plan</div>
        </div>
        <div className={classes.stepperContainer}>
          <Box sx={{ width: "100%" }}>
            <Stepper sx={{ width: "400px" }} activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <div className="headTitle">completed</div>
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button className="nextButton" onClick={handleReset}>
                    Reset
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && <Planview />}

                {activeStep === 1 && <PaymentDetails />}

                <div className="actionButton">
                  <div>
                    <Button
                      className="BackButton"
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>

                  <div>
                    <Button className="nextButton" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </Box>
        </div>
      </div>
    </DashboardLayout>
  );
}
