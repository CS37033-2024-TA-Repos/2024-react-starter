import styles from './OrderFlowers.module.css';
import React, { useState } from 'react'; // Create a CSS module for the payment page similarly

const OrderPayment: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would handle the submission of the payment form
        // Maybe sending the data to your server or processing the payment
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                {/* Card Number Input */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Credit Card Number</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card Number Here"
                    />
                </div>

                {/* CVV and Expiration Date Inputs */}
                <div className={styles.inputRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>CVV</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="CVV Here"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Expiration Date</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            placeholder="MM/YY"
                        />
                    </div>
                </div>

                {/* Name on Card Input */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name on Card</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        placeholder="Name Here"
                    />
                </div>

                {/* Button Group */}
                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.backButton}`} type="button">
                        Back
                    </button>
                    <button className={`${styles.button} ${styles.reviewButton}`} type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderPayment;
