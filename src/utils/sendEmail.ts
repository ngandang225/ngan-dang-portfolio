export const sendEmail = async (data: {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    message: string
}) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });        

        const result = await res.json();
        return result;
    } catch (error) {
        console.error('Failed to send mail:', error);
        return { message: 'Error occurred', error };
    }
};