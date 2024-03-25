import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OrderFlowers.module.css'; // Adjust the import path as necessary
//go to http://localhost:5173/order-flowers to test because navbar isnt made yet
const OrderFlowers: React.FC = () => {
    const [patientName, setPatientName] = useState('');
    const [patientRoom, setPatientRoom] = useState('');
    const [customMessage, setCustomMessage] = useState('');

    const navigate = useNavigate();

    const handleReviewOrder = () => {
        // You may want to validate or process data here before navigating
        navigate('/payment-info');
    };

    const handleBack = () => {
        // You may want to validate or process data here before navigating
        navigate('/');
    };


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Order Flowers</h2>
            <form>
                <div className={styles.inputRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Patient Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="Add Name Here"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Patient Room</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={patientRoom}
                            onChange={(e) => setPatientRoom(e.target.value)}
                            placeholder="Room Number Here"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Custom Message (optional)</label>
                    <textarea
                        className={`${styles.input} ${styles.largeTextarea}`}
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        placeholder="Add your message Here"
                    />
                </div>


                    <div className={styles.buttonGroup}>
                        <button className={`${styles.button} ${styles.backButton}`} type="button" onClick={handleBack}>
                            Back
                        </button>
                        <button className={`${styles.button} ${styles.reviewButton}`} type="submit" onClick={handleReviewOrder}>
                            Review Order
                        </button>
                    </div>
            </form>
        </div>
);
};

export default OrderFlowers;

