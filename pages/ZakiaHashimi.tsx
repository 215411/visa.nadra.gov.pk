import React from 'react';
import VisaLayout from '../components/VisaLayout';

const ZakiaHashimi: React.FC = () => {
  const visaData = {
    referenceNumber: "88005787108",
    imageSrc: "./images/zakia.jpg",
    name: "Hashimi Zakia",
    passportNo: "P03864175",
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

export default ZakiaHashimi;
