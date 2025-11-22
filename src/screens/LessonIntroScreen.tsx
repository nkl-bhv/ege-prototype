import LessonIntro from '../components/LessonIntro';

interface LessonIntroScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

export function LessonIntroScreen({ onBack, onContinue }: LessonIntroScreenProps) {
  return <LessonIntro onBack={onBack} onNext={onContinue} />;
}
