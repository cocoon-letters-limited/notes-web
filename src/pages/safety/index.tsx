import { useState } from "react";
import CreateSafety from "./createSafety";
import RadiographyPermit from "./radiographyPermit";

import ConfinedCertificate from "./ConfinedCertificate";
import IsolationCertificate from "./IsolationCertificate";
import Title from "./component/title";
// create switch
function Safety(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(2);

  switch (currentIndex) {
    case 0:
      return (
        <div>
          <Title
            title="Isolation Certificate"
            goBack={() => setCurrentIndex(3)}
          />
          <IsolationCertificate nextPage={setCurrentIndex(0)} />;
        </div>
      );
    case 1:
      return (
        <div>
          <Title
            title="Safety Systems Isolation Certificate"
            goBack={() => setCurrentIndex(4)}
          />
          <CreateSafety />
        </div>
      );
    case 2:
      return (
        <div>
          <Title title="Radiography Permit" goBack={() => setCurrentIndex(1)} />
          <RadiographyPermit />
        </div>
      );
    case 3:
      return (
        <div>
          <Title
            title="Confined Space Entry Certificate"
            goBack={() => setCurrentIndex(2)}
          />
          <ConfinedCertificate />;
        </div>
      );
    case 4:
      return (
        <div>
          <Title
            title="Confined Space Entry Certificate"
            goBack={() => setCurrentIndex(3)}
          />
          <CreateSafety />
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

export default Safety;
