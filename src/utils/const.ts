export const REQUIRED = 'Field is required.';
export const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;
export const INVALID_PHONE = 'Phone number is not valid';
export const TYPE = {
  USER: 'User',
  CATEGORY: 'Category',
  BANNER: 'Banner',
  ADMIN: 'Employee',
  TRANSACTION: 'Transaction',
  ORDER: 'Order',
  VEHICLE: 'Vehicle',
  SERVICE:'Service',
  WALLET:'Wallet'
}

export const capitalizeFirstLetter = (string: string) => {
  if (string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }
}

