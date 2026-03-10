import React from 'react';
import VisaLayout from '../components/VisaLayout';

const NeelabHashimi: React.FC = () => {
  const visaData = {
    referenceNumber: "88005787088",
    imageSrc: "./images/neelab.jpg",
    name: "Hashimi Neelab",
    passportNo: "P03882570",
    passportCountry: "Afghanistan",
    visaCategory: "Medical",
    visaSubCategory: "Short-Term",
    applicationType: "Entry",
    stayingFacility: "Single Entry",
    visaStartDate: "01 Mar 2026",
    visaEndDate: "29 May 2026",
    visaDuration: "60 day(s)"
  };

  return <VisaLayout data={visaData} />;
};

export default NeelabHashimi;
