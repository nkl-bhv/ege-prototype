import LessonStep1 from '../components/LessonStep1';

interface LessonContentScreenProps {
  onBack: () => void;
}

export function LessonContentScreen({ onBack }: LessonContentScreenProps) {
  // TODO: add forward navigation when subsequent steps are available
  return <LessonStep1 onBack={onBack} onNext={() => {}} />;
}
