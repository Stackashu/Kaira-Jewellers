import React, { createContext, useState } from 'react'

export const ContactCon = createContext();

const ContactContext = ({children}) => {
  const[isOpen,setIsOpen] = useState(false)
  const[mountModel,setMountModel] = useState(false)
  const [openFranchiseForm,setOpenFranchiseForm] = useState(false)

  return (
    <ContactCon.Provider value={{isOpen,setIsOpen,mountModel,setMountModel,openFranchiseForm,setOpenFranchiseForm}}>
      {children}
    </ContactCon.Provider>
  )
}

export default ContactContext;


