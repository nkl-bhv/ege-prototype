import { useState } from 'react';
import Layout from './components/Layout';
import { HomeScreen } from './screens/HomeScreen';
import { LessonContentScreen } from './screens/LessonContentScreen';
import { LessonIntroScreen } from './screens/LessonIntroScreen';
import { PracticeTask1Screen } from './screens/PracticeTask1Screen';
import { PracticeTask2Screen } from './screens/PracticeTask2Screen';

type ScreenKey = 'home' | 'lessonIntro' | 'lessonContent' | 'practiceTask1' | 'practiceTask2';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenKey>('home');

  return (
    <Layout>
      {currentScreen === 'home' && (
        <HomeScreen onStartLesson={() => setCurrentScreen('lessonIntro')} />
      )}

      {currentScreen === 'lessonIntro' && (
        <LessonIntroScreen
          onBack={() => setCurrentScreen('home')}
          onContinue={() => setCurrentScreen('lessonContent')}
        />
      )}

      {currentScreen === 'lessonContent' && (
        <LessonContentScreen
          onBack={() => setCurrentScreen('lessonIntro')}
          onFinishLesson={() => setCurrentScreen('practiceTask1')}
        />
      )}

      {currentScreen === 'practiceTask1' && (
        <PracticeTask1Screen
          onBack={() => setCurrentScreen('lessonContent')}
          onNext={() => setCurrentScreen('practiceTask2')}
        />
      )}

      {currentScreen === 'practiceTask2' && (
        <PracticeTask2Screen
          onBack={() => setCurrentScreen('practiceTask1')}
          onNext={() => setCurrentScreen('home')}
        />
      )}
    </Layout>
  );
};

export default App;
