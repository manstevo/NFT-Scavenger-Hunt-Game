"use client"
import React from 'react';
import { Home, Trophy, Medal, Award, Share2 } from 'lucide-react';

const Leaderboard = () => {
    const [players] = React.useState([
        { id: 1, username: "CryptoMaster", points: 5000, rank: 1, nftsCollected: 4 },
        { id: 2, username: "BlockchainWizard", points: 4800, rank: 2, nftsCollected: 4 },
        { id: 3, username: "NFTCollector", points: 4600, rank: 3, nftsCollected: 3 },
        { id: 4, username: "PuzzleSolver", points: 4400, rank: 4, nftsCollected: 3 },
        { id: 5, username: "Web3Explorer", points: 4200, rank: 5, nftsCollected: 3 },
        { id: 6, username: "TokenHunter", points: 4000, rank: 6, nftsCollected: 2 },
        { id: 7, username: "CipherBreaker", points: 3800, rank: 7, nftsCollected: 2 },
        { id: 8, username: "DAppDeveloper", points: 3600, rank: 8, nftsCollected: 2 },
        { id: 9, username: "SmartContractor", points: 3400, rank: 9, nftsCollected: 1 },
        { id: 10, username: "HashMaster", points: 3200, rank: 10, nftsCollected: 1 }
    ]);

    const getMedalIcon = (rank) => {
        const baseProps = "w-6 h-6";
        const colors = {
            1: "text-yellow-400",
            2: "text-gray-400",
            3: "text-amber-700"
        };

        switch (rank) {
            case 1:
                return <Medal className={`${baseProps} ${colors[rank]}`} />;
            case 2:
                return <Medal className={`${baseProps} ${colors[rank]}`} />;
            case 3:
                return <Medal className={`${baseProps} ${colors[rank]}`} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
            {/* Header */}
            <div className="flex justify-between items-center p-4">
                <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
                    <Home className="w-5 h-5" />
                    Back to Home
                </button >
                <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors bg-purple-800/30 px-4 py-2 rounded-full hover:bg-purple-700/50">
                    <Share2 className="w-5 h-5" />
                    Share
                </button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/10 rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-white text-center mb-4">
                        NFT Scavenger Hunt Leaderboard
                    </h1>
                    <p className="text-purple-300 text-center mb-8">
                        Top players competing for glory and rare NFTs!
                    </p>

                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-4 text-purple-300 border-b-2 border-purple-600/50 pb-4 mb-4">
                        <div className="font-medium">Rank</div>
                        <div className="font-medium">Name</div>
                        <div className="text-right font-medium">Score</div>
                        <div className="text-right font-medium">NFTs Collected</div>
                    </div>

                    {/* Player Rows */}
                    <div className="space-y-0">
                        {players.map(player => (
                            <div key={player.id}
                                className="grid grid-cols-4 gap-4 py-4 border-b-2 border-purple-800/50 hover:bg-purple-800/20 transition-colors">
                                <div className="flex items-center">
                                    {player.rank <= 3 ? (
                                        getMedalIcon(player.rank)
                                    ) : (
                                        <span className="text-white">{player.rank}</span>
                                    )}
                                </div>
                                <div className="text-white">{player.username}</div>
                                <div className="text-right text-white">{player.points}</div>
                                <div className="text-right text-white">{player.nftsCollected}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive styles */}
            <style jsx>{`
                .container {
                    width: 100%;
                    max-width: none;
                    padding: 0 2rem;
                }
                
                @media (max-width: 640px) {
                    .container {
                        padding: 0 1rem;
                    }
                    .grid-cols-4 {
                        grid-template-columns: 0.5fr 1.5fr 1fr 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Leaderboard;
