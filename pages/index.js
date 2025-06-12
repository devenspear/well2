import React, { useState } from 'react';
import Head from 'next/head';
import Landing from '../components/Landing';
import Demographics from '../components/Demographics';
import Assessment from '../components/Assessment';
import Results from '../components/Results';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [formData, setFormData] = useState({
    ageRange: '',
    gender: '',
    location: ''
  });
  const [answers, setAnswers] = useState({
    energy: 5,
    movement: 5,
    sleep: 5,
    nutrition: 5,
    mood: 5,
    purpose: 5
  });

  const handleStart = () => setCurrentPage('demographics');
  const handleDemographicsComplete = () => setCurrentPage('assessment');
  const handleAssessmentComplete = () => setCurrentPage('results');
  const handleResultsComplete = () => setCurrentPage('final');
  const handleRestart = () => {
    setCurrentPage('landing');
    setFormData({
      ageRange: '',
      gender: '',
      location: ''
    });
    setAnswers({
      energy: 5,
      movement: 5,
      sleep: 5,
      nutrition: 5,
      mood: 5,
      purpose: 5
    });
  };

  return (
    <>
      <Head>
        <title>Wellness Snapshot</title>
        <meta name="description" content="Take your wellness assessment today" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {currentPage === 'landing' && <Landing onStart={handleStart} />}
        {currentPage === 'demographics' && (
          <Demographics
            onNext={handleDemographicsComplete}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 'assessment' && (
          <Assessment
            onComplete={handleAssessmentComplete}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
        {currentPage === 'results' && (
          <Results
            onNext={handleResultsComplete}
            answers={answers}
          />
        )}
        {currentPage === 'final' && (
          <FinalCTA onRestart={handleRestart} />
        )}
      </main>
    </>
  );
}
