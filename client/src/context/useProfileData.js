import { createContext, useContext, useState } from "react";

const defaultData = {
  firstName: "",
  lastName: "",
  city: "",
  state: "",
  country: "",
};
const profileDataContext = createContext(defaultData);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(defaultData);
  return (
    <profileDataContext.Provider value={[profileData, setProfileData]}>
      {children}
    </profileDataContext.Provider>
  );
};

export default () => {
    return useContext(profileDataContext);
};