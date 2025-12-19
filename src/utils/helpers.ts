export const toTelHref = (phone: string) => `tel:${(phone || '').replace(/\s+/g, '')}`;

/**
 * Format phone number for Schema.org (international format)
 * Converts French phone format "09 62 43 49 61" to "+33962434961"
 */
export const formatPhoneForSchema = (phone: string): string => {
  const cleaned = phone.replace(/\s/g, '');
  // If it starts with 0, replace with +33 (France country code)
  if (cleaned.startsWith('0')) {
    return `+33${cleaned.substring(1)}`;
  }
  return cleaned;
};
