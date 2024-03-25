import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OrderFlowersData {
    patientName: string;
    patientRoom: string;
    customMessage: string;
}

interface OrderPaymentData {
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    nameOnCard: string;
}

interface FormData {
    orderFlowers: OrderFlowersData;
    orderPayment: OrderPaymentData;
}

interface FormDataContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

// Define a type for the props of FormDataProvider
interface FormDataProviderProps {
    children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        orderFlowers: {
            patientName: '',
            patientRoom: '',
            customMessage: '',
        },
        orderPayment: {
            cardNumber: '',
            cvv: '',
            expirationDate: '',
            nameOnCard: '',
        },
    });

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};

export const useFormData = () => {
    const context = useContext(FormDataContext);
    if (context === undefined) {
        throw new Error('useFormData must be used within a FormDataProvider');
    }
    return context;
};
