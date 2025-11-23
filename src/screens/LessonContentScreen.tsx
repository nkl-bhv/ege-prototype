import LessonStep1 from '../components/LessonStep1';

interface LessonContentScreenProps {
  onBack: () => void;
}

export function LessonContentScreen({ onBack }: LessonContentScreenProps) {
  const handleNext = () => {
    // TODO: wire up navigation for future lesson steps
    console.log('Next step TODO');
  };

  return <LessonStep1 onBack={onBack} onNext={handleNext} />;
}
