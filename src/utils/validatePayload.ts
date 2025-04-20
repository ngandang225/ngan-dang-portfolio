export type FormPayload = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    message: string
}

export const validatePayload = (payload: FormPayload): string => {
    if (payload.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(payload.email)) {
            return "Invalid email format";
        }
    }
    if (payload.phoneNumber) {
        const phoneNumberRegex = /^[0-9]{10,11}$/;
        if (!phoneNumberRegex.test(payload.phoneNumber)) {
            return "Invalid phone number format";
        }
    }
    return "";
}