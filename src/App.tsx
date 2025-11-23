import { useState } from 'react';
import Layout from './components/Layout';
import { HomeScreen } from './screens/HomeScreen';
import { LessonContentScreen } from './screens/LessonContentScreen';
import { LessonIntroScreen } from './screens/LessonIntroScreen';

type ScreenKey = 'home' | 'lessonIntro' | 'lessonContent';

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
          onFinishLesson={() => setCurrentScreen('home')}
        />
      )}
    </Layout>
  );
};

export default App;
