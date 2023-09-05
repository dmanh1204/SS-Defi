import React, { useCallback, useMemo, useState } from 'react';
import './style.scss';
import { isAddress } from 'ethers/lib/utils';
import axios from 'axios';

export const CHAIN_ID = {
    ZETA_MAINNET: 7000,
    ZETA_TESTNET: 7001,
    OPSIDE_MAINNET: 23118,
    OPSIDE_TESTNET: 51178,
};

const EXPLORER = {
    [CHAIN_ID.ZETA_TESTNET]: 'https://explorer.zetachain.com/evm/tx',
    [CHAIN_ID.OPSIDE_TESTNET]: 'https://pre-alpha.opside.info/tx',
};

export default function FaucetPage() {
    const [address, setAddress] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [txHash, setTxHash] = useState('');
    const [chainId, setChainId] = useState(CHAIN_ID.ZETA_TESTNET);

    const invalid = useMemo(() => !address || isAddress(address), [address]);

    const handleClaim = useCallback(async () => {
        if (!address || !invalid || submitting || !chainId) return;
        setSubmitting(true);
        setError('');
        setTxHash('');
        return axios
            .post(
                'https://zeta-faucet-api.starksport.finance/faucet/native-coin',
                {
                    address,
                    chainId: +chainId,
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
        if (txHash)
            return (
                <div className="success">
                    Faucet success! TxHash:{' '}
                    <a href={`${EXPLORER[chainId]}/${txHash}`} target="_blank" rel="noreferrer">
                        {txHash.slice(0.6)}...
                    </a>
                </div>
            );
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
                    <select
                        className="form-select select-chain"
                        value={chainId}
                        onChange={(e) => setChainId(e.target.value)}
                    >
                        <option value={CHAIN_ID.ZETA_TESTNET}>ZetaChain</option>
                        <option value={CHAIN_ID.OPSIDE_TESTNET}>Opside</option>
                    </select>
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
                <div className="message">{showMessage()}</div>
            </div>
        </div>
    );
}
