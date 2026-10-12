'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FloralDividerMotif } from '@/components/Motifs';

interface Question {
  id: number;
  text: string;
  brideAnswer: string;
  groomAnswer: string;
  correctAnswer: 'bride' | 'groom'; // Playful couple consensus
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'Who is more likely to be running 20 minutes late?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'groom',
  },
  {
    id: 2,
    text: 'Who takes longer to get ready for an event?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'bride',
  },
  {
    id: 3,
    text: 'Who actually said "I love you" first?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'groom',
  },
  {
    id: 4,
    text: 'Who is guaranteed to start dancing the minute music plays?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'bride',
  },
  {
    id: 5,
    text: 'Who spends more time browsing travel destinations?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'groom',
  },
  {
    id: 6,
    text: 'Who misplaces their phone at least three times a day?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'bride',
  },
  {
    id: 7,
    text: 'Who would survive longer without checking their phone?',
    brideAnswer: 'Delliah',
    groomAnswer: 'Prashant',
    correctAnswer: 'bride',
  },
];

export function BrideVsGroomGame() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userTeam, setUserTeam] = useState<'bride' | 'groom'>('bride');
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);

  // Restore state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCompleted = localStorage.getItem('wedding_quiz_completed');
      if (savedCompleted === 'true') {
        const savedScore = parseInt(localStorage.getItem('wedding_quiz_score') || '6', 10);
        const savedTeam = (localStorage.getItem('wedding_quiz_team') || 'bride') as 'bride' | 'groom';
        const savedName = localStorage.getItem('wedding_quiz_name') || '';
        setScore(savedScore);
        setUserTeam(savedTeam);
        setPlayerName(savedName);
        setIsCompleted(true);
        if (savedName) setNameSubmitted(true);
      }
    }
  }, []);

  const handleAnswer = (choice: 'bride' | 'groom') => {
    const isCorrect = choice === quizQuestions[currentIdx].correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Quiz completed
      const chosenTeam = newScore >= 4 ? 'bride' : 'groom';
      setUserTeam(chosenTeam);
      setIsCompleted(true);

      if (typeof window !== 'undefined') {
        localStorage.setItem('wedding_quiz_completed', 'true');
        localStorage.setItem('wedding_quiz_score', newScore.toString());
        localStorage.setItem('wedding_quiz_team', chosenTeam);
      }

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F6DFA0', '#641F27', '#EFA6B5'],
        });
      } catch {}
    }
  };

  const handleSubmitName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    setNameSubmitted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding_quiz_name', playerName.trim());
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCompleted(false);
    setShowLeaderboard(false);
    setHasStarted(true);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('wedding_quiz_completed');
      localStorage.removeItem('wedding_quiz_score');
      localStorage.removeItem('wedding_quiz_team');
    }
  };

  return (
    <section
      id="couple-quiz"
      className="relative z-20 w-full pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 bg-[#FAF5EC] text-warm-brown overflow-hidden"
      aria-label="Bride versus Groom Quiz and Leaderboard"
    >
      {/* 1. Subtle Botanical Transition Divider separating Secret Note from Game */}
      <div className="flex items-center justify-center gap-3 mb-6 opacity-80 pointer-events-none">
        <span className="w-10 sm:w-16 h-px bg-muted-gold/35" />
        <FloralDividerMotif className="w-24 h-5 text-muted-gold" />
        <span className="w-10 sm:w-16 h-px bg-muted-gold/35" />
      </div>

      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Section Masthead */}
        <header className="text-center mb-5 px-2 flex flex-col items-center">
          <span className="font-satoshi text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-deep-maroon/70 font-semibold mb-1">
            WEDDING PARLOR TRIVIA
          </span>
          <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
            Bride or Groom?
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-deep-maroon leading-snug">
            How well do you really know Prashant &amp; Delliah?
          </p>
        </header>

        {/* State 1: Intro (Not yet started, not completed) */}
        {!hasStarted && !isCompleted && (
          <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-muted-gold/30 shadow-[0_4px_20px_rgba(100,31,39,0.04)] text-center flex flex-col items-center">
            {/* Visual Team Crests */}
            <div className="flex items-center justify-center gap-3 mb-3 text-xs font-satoshi font-semibold">
              <span className="px-3 py-1 rounded-full bg-[#FFF5F7] border border-[#EFA6B5]/60 text-deep-maroon">
                🌸 Team Delliah
              </span>
              <span className="font-instrument italic text-warm-brown/60 text-sm">vs</span>
              <span className="px-3 py-1 rounded-full bg-[#FFFDF3] border border-muted-gold/60 text-deep-maroon">
                🌿 Team Prashant
              </span>
            </div>

            <p className="font-instrument italic text-sm sm:text-base text-warm-brown/85 leading-snug max-w-xs mb-5">
              Seven questions to test who knows the couple best. See which team your answers match!
            </p>

            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-3 rounded-full bg-deep-maroon hover:bg-[#4E171E] text-butter-yellow font-satoshi font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all shadow-sm active:scale-95 border border-muted-gold/40 flex items-center justify-center gap-2"
            >
              <span>PLAY THE QUIZ</span>
              <span>→</span>
            </button>
          </div>
        )}

        {/* State 2: Active Quiz Questions */}
        {hasStarted && !isCompleted && (
          <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-muted-gold/30 shadow-[0_4px_20px_rgba(100,31,39,0.04)] flex flex-col">
            {/* Lightweight Editorial Progress Indicator */}
            <div className="flex items-center justify-between text-xs font-satoshi text-warm-brown/70 mb-4 border-b border-muted-gold/20 pb-3">
              <span className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.2em] text-deep-maroon">
                QUESTION {currentIdx + 1} OF {quizQuestions.length}
              </span>
              <div className="flex items-center gap-1 text-[10px] select-none">
                {quizQuestions.map((_, i) => (
                  <span
                    key={i}
                    className={`transition-all ${
                      i < currentIdx
                        ? 'text-deep-maroon font-bold'
                        : i === currentIdx
                        ? 'text-deep-maroon font-black scale-125'
                        : 'text-muted-gold/35'
                    }`}
                  >
                    {i <= currentIdx ? '✦' : '✧'}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Focus: The Question */}
            <h3 className="font-instrument font-normal text-2xl sm:text-[27px] text-deep-maroon leading-snug my-5 text-center px-1">
              &ldquo;{quizQuestions[currentIdx].text}&rdquo;
            </h3>

            {/* Playful Interactive Choice Cards */}
            <div className="grid grid-cols-2 gap-3.5 mt-1">
              <button
                onClick={() => handleAnswer('bride')}
                className="p-4 rounded-xl bg-[#FFF6F8] hover:bg-[#FFEBF0] border border-[#EFA6B5]/60 hover:border-[#EFA6B5] text-center transition-all duration-200 active:scale-95 flex flex-col items-center justify-center gap-1 shadow-xs"
              >
                <span className="text-sm">🌸</span>
                <span className="text-[9.5px] font-satoshi uppercase tracking-[0.2em] text-deep-maroon/70 font-semibold">
                  THE BRIDE
                </span>
                <span className="font-instrument text-lg sm:text-xl text-deep-maroon font-normal tracking-tight">
                  Delliah
                </span>
              </button>

              <button
                onClick={() => handleAnswer('groom')}
                className="p-4 rounded-xl bg-[#FFFDF4] hover:bg-[#FFF9E6] border border-muted-gold/50 hover:border-muted-gold text-center transition-all duration-200 active:scale-95 flex flex-col items-center justify-center gap-1 shadow-xs"
              >
                <span className="text-sm">🌿</span>
                <span className="text-[9.5px] font-satoshi uppercase tracking-[0.2em] text-warm-brown/75 font-semibold">
                  THE GROOM
                </span>
                <span className="font-instrument text-lg sm:text-xl text-deep-maroon font-normal tracking-tight">
                  Prashant
                </span>
              </button>
            </div>
          </div>
        )}

        {/* State 3: Completed Score Card (Editorial Certificate / Verdict) */}
        {isCompleted && !showLeaderboard && (
          <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-muted-gold/30 shadow-[0_6px_25px_rgba(100,31,39,0.05)] flex flex-col items-center text-center">
            {/* Small Ornamental Header */}
            <div className="flex items-center gap-1.5 text-muted-gold/80 mb-2">
              <span className="text-[10px]">✦</span>
              <span className="font-satoshi text-[9px] uppercase tracking-[0.26em] text-deep-maroon/70 font-semibold">
                TRIVIA VERDICT
              </span>
              <span className="text-[10px]">✦</span>
            </div>

            {/* Score Focus */}
            <div className="my-1.5">
              <span className="font-instrument font-normal text-4xl sm:text-5xl text-deep-maroon leading-none">
                {score}{' '}
                <span className="text-2xl sm:text-3xl text-warm-brown/40 font-normal">/ 7</span>
              </span>
            </div>

            {/* Editorial Verdict */}
            <p className="font-instrument italic text-base sm:text-lg text-warm-brown/90 leading-snug my-1 max-w-xs">
              {score >= 5
                ? 'A true insider! You know the couple by heart.'
                : score >= 3
                ? 'Pretty impressive! You know them quite well.'
                : 'A great sport! Ready to make new memories.'}
            </p>

            {/* Lightweight Editorial Team Allegiance Badge */}
            <div className="mt-2.5 mb-2.5 px-4 py-1.5 rounded-full border border-muted-gold/40 bg-gradient-to-r from-[#FFFDF9] via-[#FAF4EA] to-[#FFFDF9] flex items-center gap-2 shadow-2xs">
              <span className="text-xs">{userTeam === 'bride' ? '🌸' : '🌿'}</span>
              <span className="font-satoshi text-[10px] sm:text-[10.5px] font-semibold tracking-[0.2em] uppercase text-deep-maroon">
                {userTeam === 'bride' ? 'TEAM BRIDE · DELLIAH' : 'TEAM GROOM · PRASHANT'}
              </span>
            </div>

            <p className="font-instrument italic text-xs sm:text-[13px] text-warm-brown/70 mb-4">
              Your allegiance has been recorded in the wedding chronicles.
            </p>

            {/* Visually Secondary Name Input Row */}
            <div className="w-full pt-3 border-t border-muted-gold/20 mb-4">
              {!nameSubmitted ? (
                <form onSubmit={handleSubmitName} className="flex items-center gap-2 max-w-xs mx-auto">
                  <input
                    type="text"
                    placeholder="Your name for the guest list (optional)"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-warm-ivory/70 border border-muted-gold/30 text-xs font-satoshi text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-deep-maroon"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-lg bg-deep-maroon text-butter-yellow text-xs font-satoshi font-semibold tracking-wider uppercase hover:bg-[#4E171E] transition-colors"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <p className="font-satoshi text-xs text-deep-maroon/80 font-medium">
                  Recorded for <span className="font-semibold">{playerName}</span> ✓
                </p>
              )}
            </div>

            {/* Secondary Action Links */}
            <div className="flex items-center gap-4 text-xs font-satoshi pt-1">
              <button
                onClick={handleRetakeQuiz}
                className="text-warm-brown/70 hover:text-deep-maroon transition-colors tracking-wider uppercase text-[10.5px]"
              >
                ↺ Retake Quiz
              </button>
              <span className="text-muted-gold/40">·</span>
              <button
                onClick={() => setShowLeaderboard(true)}
                className="font-semibold text-deep-maroon hover:underline tracking-wider uppercase text-[10.5px] flex items-center gap-1"
              >
                <span>View Leaderboard</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* State 4: Leaderboard View */}
        {isCompleted && showLeaderboard && (
          <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-muted-gold/30 shadow-[0_6px_25px_rgba(100,31,39,0.05)] flex flex-col text-center">
            <span className="text-[9.5px] font-satoshi font-semibold uppercase tracking-[0.24em] text-deep-maroon/70 mb-1">
              GUEST LEADERBOARD
            </span>

            <h3 className="font-instrument text-2xl sm:text-3xl font-normal text-deep-maroon leading-tight mb-4">
              Who&apos;s Leading the Standings?
            </h3>

            {/* Team percentages bar */}
            <div className="w-full mb-5">
              <div className="flex justify-between text-xs font-satoshi font-bold mb-1.5 px-1">
                <span className="text-deep-maroon">TEAM BRIDE — 54%</span>
                <span className="text-warm-brown">TEAM GROOM — 46%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-warm-ivory border border-muted-gold/25 overflow-hidden flex">
                <div className="w-[54%] h-full bg-deep-maroon" />
                <div className="w-[46%] h-full bg-butter-yellow" />
              </div>
            </div>

            {/* Top Players Roster */}
            <div className="space-y-2 text-left mb-5">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-warm-ivory/60 border border-muted-gold/20 text-xs font-satoshi">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">01</span>
                  <span className="font-medium text-warm-brown">Preeti K.</span>
                  <span className="text-[10px] text-deep-maroon/70 uppercase font-semibold">(Bride)</span>
                </div>
                <span className="font-bold text-deep-maroon">7 / 7</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-warm-ivory/60 border border-muted-gold/20 text-xs font-satoshi">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">02</span>
                  <span className="font-medium text-warm-brown">Rohan M.</span>
                  <span className="text-[10px] text-warm-brown/70 uppercase font-semibold">(Groom)</span>
                </div>
                <span className="font-bold text-deep-maroon">7 / 7</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-warm-ivory/60 border border-muted-gold/20 text-xs font-satoshi">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">03</span>
                  <span className="font-medium text-warm-brown">Siddharth P.</span>
                  <span className="text-[10px] text-deep-maroon/70 uppercase font-semibold">(Bride)</span>
                </div>
                <span className="font-bold text-deep-maroon">6 / 7</span>
              </div>

              {playerName && (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-butter-yellow/25 border border-deep-maroon/20 text-xs font-satoshi">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-deep-maroon">YOU</span>
                    <span className="font-bold text-deep-maroon">{playerName}</span>
                    <span className="text-[10px] text-deep-maroon uppercase font-bold">({userTeam})</span>
                  </div>
                  <span className="font-bold text-deep-maroon">{score} / 7</span>
                </div>
              )}
            </div>

            <p className="text-[11px] font-instrument italic text-warm-brown/70 border-t border-muted-gold/20 pt-3">
              Bragging rights only — see you on the dance floor!
            </p>

            <button
              onClick={() => setShowLeaderboard(false)}
              className="text-[11px] font-satoshi font-semibold text-deep-maroon uppercase tracking-wider mt-3 hover:underline"
            >
              ← Back to your score
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
