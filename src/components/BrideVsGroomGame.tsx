'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

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
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'groom',
  },
  {
    id: 2,
    text: 'Who takes longer to get ready for an event?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'bride',
  },
  {
    id: 3,
    text: 'Who actually said "I love you" first?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'groom',
  },
  {
    id: 4,
    text: 'Who is guaranteed to start dancing the minute music plays?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'bride',
  },
  {
    id: 5,
    text: 'Who spends more money on completely unnecessary gadgets?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'groom',
  },
  {
    id: 6,
    text: 'Who misplaces their phone at least three times a day?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
    correctAnswer: 'bride',
  },
  {
    id: 7,
    text: 'Who would survive longer without checking their phone?',
    brideAnswer: 'Ananya',
    groomAnswer: 'Dhruv',
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

  return (
    <section
      id="couple-quiz"
      className="relative w-full py-20 px-4 sm:px-6 bg-warm-ivory text-warm-brown overflow-hidden"
      aria-label="Bride versus Groom Quiz and Leaderboard"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* State 1: Intro (Not yet started, not completed) */}
        {!hasStarted && !isCompleted && (
          <div className="text-center w-full">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/70 mb-2 block">
              OKAY, LET&apos;S SETTLE THIS.
            </span>

            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl font-bold text-deep-maroon tracking-tight leading-tight mb-3">
              HOW WELL DO YOU REALLY KNOW THEM?
            </h2>

            <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/85 leading-relaxed mb-6">
              You&apos;ve made it through the wedding. Now prove you&apos;ve been paying attention.
            </p>

            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-3.5 rounded-full bg-deep-maroon hover:bg-[#4E171E] text-butter-yellow font-sans font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              TAKE THE QUIZ
            </button>
          </div>
        )}

        {/* State 2: Active Quiz Questions */}
        {hasStarted && !isCompleted && (
          <div className="w-full p-6 sm:p-7 rounded-3xl bg-white/90 border border-deep-maroon/15 shadow-xl flex flex-col">
            <div className="flex items-center justify-between text-xs font-sans text-warm-brown/60 mb-4 border-b border-warm-brown/10 pb-3">
              <span className="uppercase tracking-wider font-semibold text-deep-maroon">
                Question {currentIdx + 1} of {quizQuestions.length}
              </span>
              <span>Score: {score}</span>
            </div>

            <h3 className="font-sans font-bold text-deep-maroon text-lg sm:text-xl leading-snug mb-6 text-center">
              {quizQuestions[currentIdx].text}
            </h3>

            <div className="grid grid-cols-2 gap-3.5">
              <button
                onClick={() => handleAnswer('bride')}
                className="py-4 px-3 rounded-2xl bg-[#FFF5F7] border border-soft-pink/40 hover:border-soft-pink text-deep-maroon font-sans font-semibold text-sm text-center shadow-sm hover:shadow transition-all active:scale-95 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-xs uppercase tracking-widest text-deep-maroon/60">Bride</span>
                <span className="text-base text-deep-maroon font-bold">Ananya</span>
              </button>

              <button
                onClick={() => handleAnswer('groom')}
                className="py-4 px-3 rounded-2xl bg-[#FFFDF5] border border-butter-yellow/60 hover:border-butter-yellow text-warm-brown font-sans font-semibold text-sm text-center shadow-sm hover:shadow transition-all active:scale-95 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-xs uppercase tracking-widest text-warm-brown/60">Groom</span>
                <span className="text-base text-deep-maroon font-bold">Dhruv</span>
              </button>
            </div>
          </div>
        )}

        {/* State 3: Completed Score Card */}
        {isCompleted && !showLeaderboard && (
          <div className="w-full text-center p-6 sm:p-8 rounded-3xl bg-white/90 border border-deep-maroon/15 shadow-xl flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-butter-yellow/60 text-deep-maroon flex items-center justify-center mb-3">
              <Trophy className="w-7 h-7" />
            </div>

            <span className="font-display-title text-4xl sm:text-5xl font-bold text-deep-maroon leading-none">
              {score} / 7
            </span>

            <p className="font-editorial italic text-base sm:text-lg text-warm-brown my-2">
              Okay, you know them pretty well.
            </p>

            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-deep-maroon text-butter-yellow text-xs font-sans font-bold tracking-widest uppercase my-2">
              <span>{userTeam === 'bride' ? 'TEAM BRIDE' : 'TEAM GROOM'}</span>
            </div>

            <p className="text-xs text-warm-brown/70 font-sans mb-4">
              Your loyalty has been noted.
            </p>

            {/* Display name submission */}
            {!nameSubmitted ? (
              <form onSubmit={handleSubmitName} className="w-full flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-warm-ivory border border-deep-maroon/20 text-xs font-sans text-warm-brown focus:outline-none focus:border-deep-maroon"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-deep-maroon text-butter-yellow text-xs font-sans font-semibold"
                >
                  Save
                </button>
              </form>
            ) : (
              <p className="text-xs font-sans font-medium text-deep-maroon mb-4">
                Saved for {playerName} ✓
              </p>
            )}

            <button
              onClick={() => setShowLeaderboard(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-deep-maroon hover:underline uppercase tracking-widest mt-2"
            >
              <span>SEE WHO&apos;S WINNING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* State 4: Leaderboard View */}
        {isCompleted && showLeaderboard && (
          <div className="w-full p-6 sm:p-7 rounded-3xl bg-white/95 border border-deep-maroon/15 shadow-xl flex flex-col text-center">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/70 mb-1">
              THE VERY IMPORTANT RESULTS
            </span>

            <h3 className="font-display-title text-2xl sm:text-3xl font-bold text-deep-maroon leading-tight mb-4">
              WHO&apos;S WINNING?
            </h3>

            {/* Team percentages bar */}
            <div className="w-full mb-6">
              <div className="flex justify-between text-xs font-sans font-bold mb-1.5 px-1">
                <span className="text-deep-maroon">TEAM BRIDE — 54%</span>
                <span className="text-warm-brown">TEAM GROOM — 46%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-soft-cream overflow-hidden flex">
                <div className="w-[54%] h-full bg-deep-maroon" />
                <div className="w-[46%] h-full bg-butter-yellow" />
              </div>
            </div>

            {/* Top Players Roster */}
            <div className="space-y-2 text-left mb-6">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-soft-cream/60 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">01</span>
                  <span className="font-medium text-warm-brown">Preeti K.</span>
                  <span className="text-[10px] text-deep-maroon/60 uppercase font-semibold">(Bride)</span>
                </div>
                <span className="font-bold text-deep-maroon">7 / 7</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-soft-cream/60 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">02</span>
                  <span className="font-medium text-warm-brown">Rohan M.</span>
                  <span className="text-[10px] text-warm-brown/60 uppercase font-semibold">(Groom)</span>
                </div>
                <span className="font-bold text-deep-maroon">7 / 7</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-soft-cream/60 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-maroon">03</span>
                  <span className="font-medium text-warm-brown">Siddharth P.</span>
                  <span className="text-[10px] text-deep-maroon/60 uppercase font-semibold">(Bride)</span>
                </div>
                <span className="font-bold text-deep-maroon">6 / 7</span>
              </div>

              {playerName && (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-butter-yellow/30 border border-deep-maroon/20 text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-deep-maroon">YOU</span>
                    <span className="font-bold text-deep-maroon">{playerName}</span>
                    <span className="text-[10px] text-deep-maroon uppercase font-bold">({userTeam})</span>
                  </div>
                  <span className="font-bold text-deep-maroon">{score} / 7</span>
                </div>
              )}
            </div>

            <p className="text-[11px] font-editorial italic text-warm-brown/70 border-t border-warm-brown/10 pt-3">
              There is absolutely no prize. Bragging rights only.
            </p>

            <button
              onClick={() => setShowLeaderboard(false)}
              className="text-[11px] font-sans font-semibold text-deep-maroon uppercase tracking-wider mt-3 hover:underline"
            >
              ← Back to your score
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
