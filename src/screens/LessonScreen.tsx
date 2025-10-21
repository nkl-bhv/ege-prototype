import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMemo, useState } from 'react'
import { Alert, Pressable, ScrollView, Text, View } from 'react-native'

import { Button } from '@/components/Button'
import { LessonProgress } from '@/components/LessonProgress'
import { RootStackParamList } from '@/navigation/types'
import { LessonSlide, LessonSlideType, useStore } from '@/store/useStore'

function QuizOption({
  option,
  index,
  selected,
  onSelect
}: {
  option: string
  index: number
  selected: boolean
  onSelect: (index: number) => void
}) {
  return (
    <Pressable
      className={`mb-3 rounded-xl border px-4 py-3 ${
        selected ? 'border-secondary bg-white' : 'border-muted bg-white'
      }`}
      style={selected ? { backgroundColor: 'rgba(34,197,94,0.12)' } : undefined}
      onPress={() => onSelect(index)}
    >
      <Text className="text-base text-text">{option}</Text>
    </Pressable>
  )
}

export function LessonScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<RouteProp<RootStackParamList, 'Lesson'>>()
  const { lessonId } = route.params

  const lessons = useStore((state) => state.lessons)
  const completeLesson = useStore((state) => state.completeLesson)

  const lesson = useMemo(() => lessons.find((item) => item.id === lessonId), [lessons, lessonId])

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  if (!lesson) {
    return (
      <View className="flex-1 items-center justify-center bg-[#f9fafb]">
        <Text className="text-base text-text">Урок не найден.</Text>
      </View>
    )
  }

  const slide = lesson.slides[currentSlideIndex]
  const totalSlides = lesson.slides.length
  const isLastSlide = currentSlideIndex === totalSlides - 1
  const selectedOption = answers[slide.id]

  const handleNext = () => {
    if (slide.type === 'quiz' && selectedOption === undefined) {
      Alert.alert('Выбери ответ', 'Пожалуйста, выбери вариант, чтобы продолжить.')
      return
    }
    if (isLastSlide) {
      completeLesson(lesson.id)
      Alert.alert('Отлично!', `Ты получил +${lesson.rewardXP} XP`, [
        {
          text: 'Вернуться к курсу',
          onPress: () => navigation.goBack()
        }
      ])
    } else {
      setCurrentSlideIndex((index) => Math.min(index + 1, totalSlides - 1))
    }
  }

  const handlePrev = () => {
    setCurrentSlideIndex((index) => Math.max(index - 1, 0))
  }

  const renderSlideContent = (type: LessonSlideType, content: LessonSlide) => {
    switch (type) {
      case 'quiz':
        return (
          <View>
            <Text className="mb-4 text-lg font-semibold text-text">{content.content}</Text>
            {content.options?.map((option, idx) => (
              <QuizOption
                key={idx}
                index={idx}
                option={option}
                selected={selectedOption === idx}
                onSelect={(value) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [content.id]: value
                  }))
                }
              />
            ))}
          </View>
        )
      default:
        return <Text className="text-base leading-6 text-text">{content.content}</Text>
    }
  }

  return (
    <View className="flex-1 bg-[#f9fafb]">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 140 }}>
        <Text className="text-xs uppercase text-slate-500">Урок {lesson.isFinal ? '— финальный тест' : ''}</Text>
        <Text className="mt-1 text-2xl font-bold text-text">{lesson.title}</Text>

        <LessonProgress current={currentSlideIndex} total={totalSlides} />

        <View className="mt-4 rounded-3xl bg-surface p-5 shadow-sm">
          {renderSlideContent(slide.type, slide)}
        </View>
      </ScrollView>

      <View className="absolute bottom-6 left-0 right-0 flex-row justify-between px-6">
        <Button title="Назад" variant="ghost" disabled={currentSlideIndex === 0} onPress={handlePrev} />
        <Button title={isLastSlide ? 'Завершить урок' : 'Далее'} onPress={handleNext} />
      </View>
    </View>
  )
}
