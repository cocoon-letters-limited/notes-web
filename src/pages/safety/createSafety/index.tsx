import { useState } from "react";
import CreateSafety from "./createSafety";
import RadiographyPermit from "./radiographyPermit";

import ConfinedCertificate from "./ConfinedCertificate";
import IsolationCertificate from "./IsolationCertificate";
import Title from "../component/title";
// create switch
function CreateSafetyLayout(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  switch (currentIndex) {
    case 0:
      return (
        <div>
          <Title
            title="Isolation Certificate"
            goBack={() => setCurrentIndex(1)}
          />
          <IsolationCertificate />;
        </div>
      );
    case 1:
      return (
        <div>
          <Title
            title="Safety Systems Isolation Certificate"
            goBack={() => setCurrentIndex(2)}
          />
          <CreateSafety />
        </div>
      );
    case 2:
      return (
        <div>
          <Title title="Radiography Permit" goBack={() => setCurrentIndex(3)} />
          <RadiographyPermit />
        </div>
      );
    case 3:
      return (
        <div>
          <Title
            title="Confined Space Entry Certificate"
            goBack={() => setCurrentIndex(4)}
          />
          <ConfinedCertificate />;
        </div>
      );
    case 4:
      return (
        <div>
          <Title
            title="Isolation Certificate"
            goBack={() => setCurrentIndex(0)}
          />
          <IsolationCertificate />;
        </div>
      );
    default:
      return (
        <div>
          <Title
            title="Confined Space Entry Certificate"
            goBack={() => setCurrentIndex(0)}
          />
          <ConfinedCertificate />
        </div>
      );
  }
}

export default CreateSafetyLayout;
