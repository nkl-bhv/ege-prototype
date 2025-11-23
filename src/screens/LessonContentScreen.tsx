import { useState } from 'react';
import LessonStep1 from '../components/LessonStep1';
import LessonStep2 from '../components/LessonStep2';
import LessonStep3 from '../components/LessonStep3';
import LessonStep4 from '../components/LessonStep4';

interface LessonContentScreenProps {
  onBack: () => void; // назад к обложке урока
  onFinishLesson?: () => void; // вызывается с шага 4 при «Перейти к заданиям»
}

export function LessonContentScreen({ onBack, onFinishLesson }: LessonContentScreenProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const handleFinish = () => {
    if (onFinishLesson) {
      onFinishLesson();
    }
  };

  if (step === 1) {
    return <LessonStep1 onBack={onBack} onNext={() => setStep(2)} />;
  }

  if (step === 2) {
    return <LessonStep2 onBack={() => setStep(1)} onNext={() => setStep(3)} />;
  }

  if (step === 3) {
    return <LessonStep3 onBack={() => setStep(2)} onNext={() => setStep(4)} />;
  }

  // step === 4
  return <LessonStep4 onBack={() => setStep(3)} onNext={handleFinish} />;
}
