import { format, parse } from "date-fns";
import { Profile, ProfileFormValuesInterface } from "types/shared.types";

export const stateValuesToFormValues = (profile: Profile) => {
  const transformedValues: ProfileFormValuesInterface = {
    ...profile,
    date: parse(profile.date, "dd/mm/yyyy", new Date()),
  };
  return transformedValues;
};

export const formValuesToStateValues = (
  formValues: ProfileFormValuesInterface
) => {
  const transformedValues: Omit<Profile, "id"> = {
    ...formValues,
    date: format(formValues.date, "dd/mm/yyyy"),
  };
  return transformedValues;
};

export const mock = (success: boolean, timeout = 1000) => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(success);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};
