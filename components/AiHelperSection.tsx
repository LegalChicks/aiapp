
import React, { useState } from 'react';
import { getAiHelperResponse, HelperAction } from '../services/geminiService';

const AiHelperSection: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const exampleText = 'I want to start a small backyard farm with 50 Rhode Island Red chickens for egg production. I plan to use a semi-intensive system with a small coop and a fenced ranging area. I will supplement their diet with madre de agua from my garden.';

    const handleGenerate = async (action: HelperAction) => {
        setIsLoading(true);
        setError('');
        setOutputText('');
        try {
            const response = await getAiHelperResponse(inputText, action);
            setOutputText(response);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        }
        setIsLoading(false);
    };

    if (!process.env.API_KEY) {
        return null;
    }

    return (
        <section id="ai-assistant" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark">AI Farm Assistant</h2>
                    <p className="text-lg text-gray-600 mt-2">Get AI-powered feedback on your farm plans and challenges.</p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="ai-input" className="block text-gray-700 text-sm font-bold mb-2">
                            Describe your plan, idea, or challenge:
                        </label>
                        <textarea
                            id="ai-input"
                            rows={6}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow"
                            placeholder="Describe your situation here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                         <p className="text-xs text-gray-500 mt-1 text-right">
                            <button onClick={() => setInputText(exampleText)} className="text-brand-green hover:underline font-medium">
                                Try an example
                            </button>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                        <button
                            onClick={() => handleGenerate('analyze')}
                            className="bg-brand-brown hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={isLoading || !inputText.trim()}
                        >
                            Analyze Strengths
                        </button>
                        <button
                            onClick={() => handleGenerate('risks')}
                            className="bg-brand-brown hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={isLoading || !inputText.trim()}
                        >
                            Identify Risks
                        </button>
                         <button
                            onClick={() => handleGenerate('solutions')}
                            className="bg-brand-brown hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={isLoading || !inputText.trim()}
                        >
                            Suggest Solutions
                        </button>
                         <button
                            onClick={() => handleGenerate('improve')}
                            className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={isLoading || !inputText.trim()}
                        >
                            Improve Writing
                        </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg min-h-[200px] border border-gray-200">
                        <h3 className="font-bold text-brand-dark mb-2">AI Generated Response:</h3>
                        {isLoading ? (
                            <div className="flex items-center justify-center h-full">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                                    <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <span className="ml-2 text-gray-600">Analyzing...</span>
                                </div>
                            </div>
                        ) : error ? (
                             <div className="text-red-600 bg-red-100 p-3 rounded">{error}</div>
                        ) : outputText ? (
                            <div className="text-gray-800 whitespace-pre-wrap font-serif">{outputText}</div>
                        ) : (
                            <p className="text-gray-500 italic">Your AI-generated feedback will appear here. Write a description above and choose an action.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiHelperSection;
