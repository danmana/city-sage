import { ArrowLeftIcon, BotIcon, LoaderPinwheelIcon } from "lucide-react";
import { Button } from "./ui/button";

export function WalkingTour({
  cityName,
  interests,
  onBack,
}: {
  cityName: string;
  interests: string;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full px-4 sm:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground">
            <Button
              className="rounded-full bg-primary/10 p-2 h-auto mr-2 text-primary-foreground transition-colors hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary align-middle"
              onClick={onBack}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
            City Sage
          </h1>
          <p className="text-lg text-primary-foreground/80">
            <BotIcon className="h-8 w-8 inline align-middle" /> is building your walking tour in
            <a
              className="text-primary-foreground italic capitalize underline underline-offset-4 decoration-2 hover:text-primary transition-all cursor-pointer white"
              onClick={onBack}
            >
              {" "}
              {cityName}{" "}
            </a>{" "}
            with a focus on{" "}
            <a
              className="text-primary-foreground italic capitalize underline underline-offset-4 decoration-2 hover:text-primary transition-all cursor-pointer white"
              onClick={onBack}
            >
              {" "}
              {interests}{" "}
            </a>
            {" ..."}
          </p>

        </div>
      </div>
    </div>
  );
}
