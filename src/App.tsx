import { useState } from "react";
import LandingPage from "./components/LandingPage";
import CompanyApp from "./CompanyApp";

// Apple data
import { appleRecords } from "./data/apple/records";
import { appleSources } from "./data/apple/sources";
import { appleSecFilings, appleQuarterlyFilings, appleSecFilingsGap } from "./data/apple/secFilings";
import { appleProductReleases } from "./data/apple/productReleases";
import { appleOperationsLocations } from "./data/apple/operations";
import { appleBoardSources, appleBoardSourcesGap } from "./data/apple/boardSources";
import {
  appleCeoSources, appleCeoSourcesGap,
  appleOwnershipSources, appleOwnershipSourcesGap,
  appleValuationSources, appleValuationSourcesGap,
  appleMoatSourcesGap, appleCapitalAllocationSourcesGap,
  appleOperationsSources, appleOperationsSourcesGap,
} from "./data/apple/sectionSources";

// Tesla data
import { teslaRecords } from "./data/tesla/records";
import { teslaSources } from "./data/tesla/sources";
import { teslaSecFilings, teslaQuarterlyFilings, teslaSecFilingsGap } from "./data/tesla/secFilings";
import { teslaProductReleases } from "./data/tesla/productReleases";
import { teslaOperationsLocations } from "./data/tesla/operations";
import { teslaBoardSources, teslaBoardSourcesGap } from "./data/tesla/boardSources";
import {
  teslaCeoSources, teslaCeoSourcesGap,
  teslaOwnershipSources, teslaOwnershipSourcesGap,
  teslaValuationSources, teslaValuationSourcesGap,
  teslaMoatSourcesGap, teslaCapitalAllocationSourcesGap,
  teslaOperationsSources, teslaOperationsSourcesGap,
} from "./data/tesla/sectionSources";

// Toyota data
import { toyotaRecords } from "./data/toyota/records";
import { toyotaSources } from "./data/toyota/sources";
import { toyotaSecFilings, toyotaQuarterlyFilings, toyotaSecFilingsGap } from "./data/toyota/secFilings";
import { toyotaProductReleases } from "./data/toyota/productReleases";
import { toyotaOperationsLocations } from "./data/toyota/operations";
import { toyotaBoardSources, toyotaBoardSourcesGap } from "./data/toyota/boardSources";
import {
  toyotaCeoSources, toyotaCeoSourcesGap,
  toyotaOwnershipSourcesGap,
  toyotaValuationSources, toyotaValuationSourcesGap,
  toyotaMoatSourcesGap, toyotaCapitalAllocationSourcesGap,
  toyotaOperationsSources, toyotaOperationsSourcesGap,
} from "./data/toyota/sectionSources";

// SpaceX data
import { spacexRecords } from "./data/spacex/records";
import { spacexSources } from "./data/spacex/sources";
import { spacexSecFilings, spacexQuarterlyFilings, spacexSecFilingsGap } from "./data/spacex/secFilings";
import { spacexProductReleases } from "./data/spacex/productReleases";
import { spacexOperationsLocations } from "./data/spacex/operations";
import { spacexBoardSources, spacexBoardSourcesGap } from "./data/spacex/boardSources";
import {
  spacexCeoSourcesGap,
  spacexOwnershipSources, spacexOwnershipSourcesGap,
  spacexValuationSources, spacexValuationSourcesGap,
  spacexMoatSourcesGap, spacexCapitalAllocationSourcesGap,
  spacexOperationsSources, spacexOperationsSourcesGap,
} from "./data/spacex/sectionSources";

// NVIDIA data
import { nvidiaRecords } from "./data/nvidia/records";
import { nvidiaSources } from "./data/nvidia/sources";
import { nvidiaSecFilings, nvidiaQuarterlyFilings, nvidiaSecFilingsGap } from "./data/nvidia/secFilings";
import { nvidiaProductReleases } from "./data/nvidia/productReleases";
import { nvidiaOperationsLocations } from "./data/nvidia/operations";
import { nvidiaBoardSources, nvidiaBoardSourcesGap } from "./data/nvidia/boardSources";
import {
  nvidiaCeoSourcesGap,
  nvidiaOwnershipSources, nvidiaOwnershipSourcesGap,
  nvidiaValuationSources, nvidiaValuationSourcesGap,
  nvidiaMoatSourcesGap, nvidiaCapitalAllocationSourcesGap,
  nvidiaOperationsSources, nvidiaOperationsSourcesGap,
} from "./data/nvidia/sectionSources";

// Amazon data
import { amazonRecords } from "./data/amazon/records";
import { amazonSources } from "./data/amazon/sources";
import { amazonSecFilings, amazonQuarterlyFilings, amazonSecFilingsGap } from "./data/amazon/secFilings";
import { amazonProductReleases } from "./data/amazon/productReleases";
import { amazonOperationsLocations } from "./data/amazon/operations";
import { amazonBoardSources, amazonBoardSourcesGap } from "./data/amazon/boardSources";
import {
  amazonCeoSources, amazonCeoSourcesGap,
  amazonOwnershipSources, amazonOwnershipSourcesGap,
  amazonValuationSources, amazonValuationSourcesGap,
  amazonMoatSourcesGap, amazonCapitalAllocationSourcesGap,
  amazonOperationsSources, amazonOperationsSourcesGap,
} from "./data/amazon/sectionSources";

// Meta data
import { metaRecords } from "./data/meta/records";
import { metaSources } from "./data/meta/sources";
import { metaSecFilings, metaQuarterlyFilings, metaSecFilingsGap } from "./data/meta/secFilings";
import { metaProductReleases } from "./data/meta/productReleases";
import { metaOperationsLocations } from "./data/meta/operations";
import { metaBoardSources, metaBoardSourcesGap } from "./data/meta/boardSources";
import {
  metaCeoSources, metaCeoSourcesGap,
  metaOwnershipSources, metaOwnershipSourcesGap,
  metaValuationSources, metaValuationSourcesGap,
  metaMoatSourcesGap, metaCapitalAllocationSourcesGap,
  metaOperationsSources, metaOperationsSourcesGap,
} from "./data/meta/sectionSources";

// Microsoft data
import { microsoftRecords } from "./data/microsoft/records";
import { microsoftSources } from "./data/microsoft/sources";
import { microsoftSecFilings, microsoftQuarterlyFilings, microsoftSecFilingsGap } from "./data/microsoft/secFilings";
import { microsoftProductReleases } from "./data/microsoft/productReleases";
import { microsoftOperationsLocations } from "./data/microsoft/operations";
import { microsoftBoardSources, microsoftBoardSourcesGap } from "./data/microsoft/boardSources";
import {
  microsoftCeoSources, microsoftCeoSourcesGap,
  microsoftOwnershipSources, microsoftOwnershipSourcesGap,
  microsoftValuationSources, microsoftValuationSourcesGap,
  microsoftMoatSourcesGap, microsoftCapitalAllocationSourcesGap,
  microsoftOperationsSources, microsoftOperationsSourcesGap,
} from "./data/microsoft/sectionSources";

// Google data
import { googleRecords } from "./data/google/records";
import { googleSources } from "./data/google/sources";
import { googleSecFilings, googleQuarterlyFilings, googleSecFilingsGap } from "./data/google/secFilings";
import { googleProductReleases } from "./data/google/productReleases";
import { googleOperationsLocations } from "./data/google/operations";
import { googleBoardSources, googleBoardSourcesGap } from "./data/google/boardSources";
import {
  googleCeoSources, googleCeoSourcesGap,
  googleOwnershipSources, googleOwnershipSourcesGap,
  googleValuationSources, googleValuationSourcesGap,
  googleMoatSourcesGap, googleCapitalAllocationSourcesGap,
  googleOperationsSources, googleOperationsSourcesGap,
} from "./data/google/sectionSources";

import type { CompanyData } from "./CompanyApp";

const APPLE: CompanyData = {
  records: appleRecords,
  sources: appleSources,
  annualFilings: appleSecFilings,
  quarterlyFilings: appleQuarterlyFilings,
  filingsGap: appleSecFilingsGap,
  productReleases: appleProductReleases,
  operationsLocations: appleOperationsLocations,
  boardSources: appleBoardSources,
  boardSourcesGap: appleBoardSourcesGap,
  ceoSources: appleCeoSources,
  ceoSourcesGap: appleCeoSourcesGap,
  ownershipSources: appleOwnershipSources,
  ownershipSourcesGap: appleOwnershipSourcesGap,
  valuationSources: appleValuationSources,
  valuationSourcesGap: appleValuationSourcesGap,
  moatSourcesGap: appleMoatSourcesGap,
  capitalAllocationSourcesGap: appleCapitalAllocationSourcesGap,
  operationsSources: appleOperationsSources,
  operationsSourcesGap: appleOperationsSourcesGap,
};

const TESLA: CompanyData = {
  records: teslaRecords,
  sources: teslaSources,
  annualFilings: teslaSecFilings,
  quarterlyFilings: teslaQuarterlyFilings,
  filingsGap: teslaSecFilingsGap,
  productReleases: teslaProductReleases,
  operationsLocations: teslaOperationsLocations,
  boardSources: teslaBoardSources,
  boardSourcesGap: teslaBoardSourcesGap,
  ceoSources: teslaCeoSources,
  ceoSourcesGap: teslaCeoSourcesGap,
  ownershipSources: teslaOwnershipSources,
  ownershipSourcesGap: teslaOwnershipSourcesGap,
  valuationSources: teslaValuationSources,
  valuationSourcesGap: teslaValuationSourcesGap,
  moatSourcesGap: teslaMoatSourcesGap,
  capitalAllocationSourcesGap: teslaCapitalAllocationSourcesGap,
  operationsSources: teslaOperationsSources,
  operationsSourcesGap: teslaOperationsSourcesGap,
};

const TOYOTA: CompanyData = {
  records: toyotaRecords,
  sources: toyotaSources,
  annualFilings: toyotaSecFilings,
  quarterlyFilings: toyotaQuarterlyFilings,
  filingsGap: toyotaSecFilingsGap,
  productReleases: toyotaProductReleases,
  operationsLocations: toyotaOperationsLocations,
  boardSources: toyotaBoardSources,
  boardSourcesGap: toyotaBoardSourcesGap,
  ceoSources: toyotaCeoSources,
  ceoSourcesGap: toyotaCeoSourcesGap,
  ownershipSourcesGap: toyotaOwnershipSourcesGap,
  valuationSources: toyotaValuationSources,
  valuationSourcesGap: toyotaValuationSourcesGap,
  moatSourcesGap: toyotaMoatSourcesGap,
  capitalAllocationSourcesGap: toyotaCapitalAllocationSourcesGap,
  operationsSources: toyotaOperationsSources,
  operationsSourcesGap: toyotaOperationsSourcesGap,
};

const SPACEX: CompanyData = {
  records: spacexRecords,
  sources: spacexSources,
  annualFilings: spacexSecFilings,
  quarterlyFilings: spacexQuarterlyFilings,
  filingsGap: spacexSecFilingsGap,
  productReleases: spacexProductReleases,
  operationsLocations: spacexOperationsLocations,
  boardSources: spacexBoardSources,
  boardSourcesGap: spacexBoardSourcesGap,
  ceoSourcesGap: spacexCeoSourcesGap,
  ownershipSources: spacexOwnershipSources,
  ownershipSourcesGap: spacexOwnershipSourcesGap,
  valuationSources: spacexValuationSources,
  valuationSourcesGap: spacexValuationSourcesGap,
  moatSourcesGap: spacexMoatSourcesGap,
  capitalAllocationSourcesGap: spacexCapitalAllocationSourcesGap,
  operationsSources: spacexOperationsSources,
  operationsSourcesGap: spacexOperationsSourcesGap,
};

const NVIDIA: CompanyData = {
  records: nvidiaRecords,
  sources: nvidiaSources,
  annualFilings: nvidiaSecFilings,
  quarterlyFilings: nvidiaQuarterlyFilings,
  filingsGap: nvidiaSecFilingsGap,
  productReleases: nvidiaProductReleases,
  operationsLocations: nvidiaOperationsLocations,
  boardSources: nvidiaBoardSources,
  boardSourcesGap: nvidiaBoardSourcesGap,
  ceoSourcesGap: nvidiaCeoSourcesGap,
  ownershipSources: nvidiaOwnershipSources,
  ownershipSourcesGap: nvidiaOwnershipSourcesGap,
  valuationSources: nvidiaValuationSources,
  valuationSourcesGap: nvidiaValuationSourcesGap,
  moatSourcesGap: nvidiaMoatSourcesGap,
  capitalAllocationSourcesGap: nvidiaCapitalAllocationSourcesGap,
  operationsSources: nvidiaOperationsSources,
  operationsSourcesGap: nvidiaOperationsSourcesGap,
};

const AMAZON: CompanyData = {
  records: amazonRecords,
  sources: amazonSources,
  annualFilings: amazonSecFilings,
  quarterlyFilings: amazonQuarterlyFilings,
  filingsGap: amazonSecFilingsGap,
  productReleases: amazonProductReleases,
  operationsLocations: amazonOperationsLocations,
  boardSources: amazonBoardSources,
  boardSourcesGap: amazonBoardSourcesGap,
  ceoSources: amazonCeoSources,
  ceoSourcesGap: amazonCeoSourcesGap,
  ownershipSources: amazonOwnershipSources,
  ownershipSourcesGap: amazonOwnershipSourcesGap,
  valuationSources: amazonValuationSources,
  valuationSourcesGap: amazonValuationSourcesGap,
  moatSourcesGap: amazonMoatSourcesGap,
  capitalAllocationSourcesGap: amazonCapitalAllocationSourcesGap,
  operationsSources: amazonOperationsSources,
  operationsSourcesGap: amazonOperationsSourcesGap,
};

const META: CompanyData = {
  records: metaRecords,
  sources: metaSources,
  annualFilings: metaSecFilings,
  quarterlyFilings: metaQuarterlyFilings,
  filingsGap: metaSecFilingsGap,
  productReleases: metaProductReleases,
  operationsLocations: metaOperationsLocations,
  boardSources: metaBoardSources,
  boardSourcesGap: metaBoardSourcesGap,
  ceoSources: metaCeoSources,
  ceoSourcesGap: metaCeoSourcesGap,
  ownershipSources: metaOwnershipSources,
  ownershipSourcesGap: metaOwnershipSourcesGap,
  valuationSources: metaValuationSources,
  valuationSourcesGap: metaValuationSourcesGap,
  moatSourcesGap: metaMoatSourcesGap,
  capitalAllocationSourcesGap: metaCapitalAllocationSourcesGap,
  operationsSources: metaOperationsSources,
  operationsSourcesGap: metaOperationsSourcesGap,
};

const MICROSOFT: CompanyData = {
  records: microsoftRecords,
  sources: microsoftSources,
  annualFilings: microsoftSecFilings,
  quarterlyFilings: microsoftQuarterlyFilings,
  filingsGap: microsoftSecFilingsGap,
  productReleases: microsoftProductReleases,
  operationsLocations: microsoftOperationsLocations,
  boardSources: microsoftBoardSources,
  boardSourcesGap: microsoftBoardSourcesGap,
  ceoSources: microsoftCeoSources,
  ceoSourcesGap: microsoftCeoSourcesGap,
  ownershipSources: microsoftOwnershipSources,
  ownershipSourcesGap: microsoftOwnershipSourcesGap,
  valuationSources: microsoftValuationSources,
  valuationSourcesGap: microsoftValuationSourcesGap,
  moatSourcesGap: microsoftMoatSourcesGap,
  capitalAllocationSourcesGap: microsoftCapitalAllocationSourcesGap,
  operationsSources: microsoftOperationsSources,
  operationsSourcesGap: microsoftOperationsSourcesGap,
};

const GOOGLE: CompanyData = {
  records: googleRecords,
  sources: googleSources,
  annualFilings: googleSecFilings,
  quarterlyFilings: googleQuarterlyFilings,
  filingsGap: googleSecFilingsGap,
  productReleases: googleProductReleases,
  operationsLocations: googleOperationsLocations,
  boardSources: googleBoardSources,
  boardSourcesGap: googleBoardSourcesGap,
  ceoSources: googleCeoSources,
  ceoSourcesGap: googleCeoSourcesGap,
  ownershipSources: googleOwnershipSources,
  ownershipSourcesGap: googleOwnershipSourcesGap,
  valuationSources: googleValuationSources,
  valuationSourcesGap: googleValuationSourcesGap,
  moatSourcesGap: googleMoatSourcesGap,
  capitalAllocationSourcesGap: googleCapitalAllocationSourcesGap,
  operationsSources: googleOperationsSources,
  operationsSourcesGap: googleOperationsSourcesGap,
};

type View = "landing" | "apple" | "tesla" | "toyota" | "spacex" | "nvidia" | "amazon" | "meta" | "microsoft" | "google";

export default function App() {
  const [view, setView] = useState<View>("landing");

  if (view === "apple") return <CompanyApp data={APPLE} onBack={() => setView("landing")} />;
  if (view === "tesla") return <CompanyApp data={TESLA} onBack={() => setView("landing")} />;
  if (view === "toyota") return <CompanyApp data={TOYOTA} onBack={() => setView("landing")} />;
  if (view === "spacex") return <CompanyApp data={SPACEX} onBack={() => setView("landing")} />;
  if (view === "nvidia") return <CompanyApp data={NVIDIA} onBack={() => setView("landing")} />;
  if (view === "amazon") return <CompanyApp data={AMAZON} onBack={() => setView("landing")} />;
  if (view === "meta") return <CompanyApp data={META} onBack={() => setView("landing")} />;
  if (view === "microsoft") return <CompanyApp data={MICROSOFT} onBack={() => setView("landing")} />;
  if (view === "google") return <CompanyApp data={GOOGLE} onBack={() => setView("landing")} />;
  return (
    <LandingPage
      onSelectApple={() => setView("apple")}
      onSelectTesla={() => setView("tesla")}
      onSelectToyota={() => setView("toyota")}
      onSelectSpaceX={() => setView("spacex")}
      onSelectNvidia={() => setView("nvidia")}
      onSelectAmazon={() => setView("amazon")}
      onSelectMeta={() => setView("meta")}
      onSelectMicrosoft={() => setView("microsoft")}
      onSelectGoogle={() => setView("google")}
    />
  );
}
