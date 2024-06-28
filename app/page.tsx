"use client";
import { useState } from "react";
import { CityNameForm } from "../components/city-name-form";
import { InterestsForm } from "../components/interests-form";
import { WalkingTour } from "../components/walking-tour";

export default function Home() {
  const [step, setStep] = useState(0);
  const [cityName, setCityName] = useState("");
  const [interests, setInterests] = useState("");

  return (
    <>
      {step === 0 && <CityNameForm cityName={cityName} onChange={setCityName} onSubmit={() => setStep(1)} />}
      {step === 1 && (
        <InterestsForm
          cityName={cityName}
          onBack={() => setStep(0)}
          onSubmit={(interests) => {
            setInterests(interests);
            if (interests) {
              setStep(2);
            }
          }}
        />
      )}
      {step === 2 && <WalkingTour cityName={cityName} interests={interests} onBack={() => setStep(0)} />}
    </>
  );
}
