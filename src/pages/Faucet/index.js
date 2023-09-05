import React, { useCallback, useMemo, useState } from 'react';
import './style.scss';
import { isAddress } from 'ethers/lib/utils';
import axios from 'axios';

export default function FaucetPage() {
    const [address, setAddress] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [txHash, setTxHash] = useState('');

    const invalid = useMemo(() => !address || isAddress(address), [address]);

    const handleClaim = useCallback(async () => {
        if (!address || !invalid || submitting) return;
        setSubmitting(true);
        setError('');
        setTxHash('');
        return axios
            .post(
                'https://zeta-faucet-api.starksport.finance/faucet/native-coin',
                {
                    address,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((res) => {
                // console.log(res.data.status);
                setTxHash(res.data.transactionHash);
                setSubmitting(false);
            })
            .catch((err) => {
                setError(err?.response?.data?.message ?? err.message ?? err);
                setSubmitting(false);
            });
    }, [address, submitting, invalid]);

    const showMessage = () => {
        if (submitting) return;
        if (!invalid) return <div className="invalid">Invalid Address</div>;
        if (error) return <div className="invalid">{error}</div>;
        if (txHash) return <div className="success">Faucet success! TxHash: {txHash}</div>;
    };

    return (
        <div className="faucet-page">
            <div className="header-div">STARKSPORT FAUCET</div>
            <div className="faucet-div">
                <div className="faucet-input-wrapper">
                    <input
                        className="faucet-input"
                        placeholder="Enter your walllet Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button className="faucet-button" onClick={handleClaim}>
                        {submitting ? (
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Submitting...</span>
                            </div>
                        ) : (
                            'CLAIM'
                        )}
                    </button>
                </div>
                {showMessage()}
            </div>
        </div>
    );
}
