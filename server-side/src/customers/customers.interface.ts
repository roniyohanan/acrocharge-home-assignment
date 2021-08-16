export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  email: string;
  phoneNumber: string;
  address: string;
}

export declare enum Gender{
  Male = 'MALE',
  Female ='FEMALE'
}
