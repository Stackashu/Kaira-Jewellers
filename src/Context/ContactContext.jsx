import React, { createContext, useState } from 'react'


export const ContactCon = createContext();

const ContactContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mountModel, setMountModel] = useState(false);
  const [openFranchiseForm, setOpenFranchiseForm] = useState(false);
  const [loadedDataName, setLoadedDataName] = useState({name:"",banner:null,images:[]});
  const [loadedJewelleryData, setLoadedJewelleryData] = useState({});

  const contextValue = {
    isOpen,
    setIsOpen,
    mountModel,
    setMountModel,
    openFranchiseForm,
    setOpenFranchiseForm,
    loadedDataName,
    setLoadedDataName,
    loadedJewelleryData,
    setLoadedJewelleryData,
  };

  return (
    <ContactCon.Provider value={contextValue}>
      {children}
    </ContactCon.Provider>
  );
};

export default ContactContext;